import { useParams } from "react-router-dom";
import useFetch from "../../api/useFetch";
import { useEffect, useState } from "react";
import PageHeader from "../globals/PageHeader";
import { currencyFormatter } from "../../utils/helper";
import { shopTabData } from "../../utils/data";

const SingleProductPage = () => {
  const { permalink } = useParams();
  const { data, loading } = useFetch(`products`);
  const [singleData, setsingleData] = useState();
  const [activeTab, setactiveTab] = useState(shopTabData[0]);

  const [counter, setcounter] = useState(0);

  useEffect(() => {
    if (data) {
      const sD = data?.filter(
        (item) => item.permalink.toLowerCase() === permalink.toLowerCase()
        /* (item) => console.log("item permalink", item.permalink) */
      )[0];

      setsingleData(sD);
    }
  }, [data]);

  const handleNextImg = () => {
    setcounter(
      counter === singleData?.productImage.length - 1 ? 0 : counter + 1
    );
  };

  useEffect(() => {
    setTimeout(() => {
      handleNextImg();
    }, 5000);
  }, [counter]);

  return (
    <div className="w-screen">
      <PageHeader title={`shop / ${singleData?.productTitle}`} />
      <div className="container py-20">
        <div className="flex flex-col gap-10">
          {singleData ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
              <div className="col-span-1 flex flex-col gap-7">
                <img
                  src={`/images/shop/${singleData?.productImage[counter]}`}
                  alt=""
                />

                <div className="flex gap-6 justify-center">
                  {singleData?.productImage?.map((img, i) => (
                    <img
                      key={img}
                      src={`/images/shop/${img}`}
                      alt=""
                      className={
                        counter === i
                          ? "w-[100px] border-[10px] border-yayyuYellow"
                          : "w-[100px] "
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-3">
                <span className="text-sm uppercase">
                  {singleData?.productCategory}
                </span>

                <h2 className="text-[16px] uppercase font-medium">
                  {singleData?.productTitle}
                </h2>

                <span className="">
                  #
                  {currencyFormatter(singleData?.price)
                    ?.toString()
                    .substring(4)}
                </span>

                <span className="text-sm uppercase">0 reviews</span>
                <span className="text-sm py-1 text-[16px]">
                  {singleData.productDescription}
                </span>

                <div className="flex items-center gap-3 mt-7 mb-2">
                  <div className="flex gap-2">
                    <div className="add-btn">-</div>
                    <div className="flex justify-center items-center">0</div>
                    <div className="add-btn">+</div>
                  </div>

                  <div className="primary-btn hover:text-white h-full w-full flex justify-center items-center gap-2 uppercase ">
                    <span className="mt-1">Add to Cart</span>
                    <img src="/icons/cart-white.svg" alt="" />
                  </div>
                  <div className="bg-gray-400 h-12 w-20 flex justify-center items-center hover:bg-yayyuYellow">
                    <img src="/icons/like.svg" alt="" />
                  </div>
                </div>
                <div className="my-5 w-full h-12 secondary-btn flex items-center justify-center gap-2 uppercase">
                  <span className="text-[16px]">Buy Now</span>
                  <img src="/icons/cart.svg" alt="" />
                </div>

                {/* tabs */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-5">
                    {shopTabData?.map((tab) => (
                      <div
                        key={tab}
                        onClick={() => setactiveTab(tab)}
                        className={
                          activeTab === tab
                            ? "w-[24%] text-black border-b-[1px] border-b-black cursor-pointer pb-1"
                            : "w-[24%] text-black border-b-[1px] border-b-black cursor-pointer pb-1 opacity-40"
                        }
                      >
                        {tab}
                      </div>
                    ))}
                  </div>

                  {/* tab content */}
                  <div className="">
                    {activeTab == "Description" && (
                      <div className="">{singleData?.productDescription}</div>
                    )}

                    {activeTab == "Details" && (
                      <div className="">
                        {singleData?.productSpecification?.map(
                          (productSpec, i) => (
                            <div key={i} className="flex flex-col gap-5">
                              <li className="">{productSpec}</li>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
