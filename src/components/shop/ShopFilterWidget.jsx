import { useState } from "react";
import { productCategory } from "../../utils/data";
import { currencyFormatter } from "../../utils/helper";

const ShopFilterWidget = ({
  showFilterWidget,
  setshowFilterWidget,
  setcategory,
  setfiltered,
  price,
  setprice,
}) => {
  const [cat, setcat] = useState();
  const [pr, setpr] = useState(0);

  const handleFilter = () => {
    setcategory(cat);
    setprice(pr);
    setshowFilterWidget(false);
    setfiltered(true);
  };

  return (
    <div
      className={
        showFilterWidget
          ? "fixed top-[70px] left-0 w-screen h-[88vh] bg-black/60"
          : "hidden"
      }
    >
      <div className="w-full md:w-[35%] h-full bg-white py-4 px-5 md:px-7">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div className="text-black font-semibold text-[20px]">
              Filter Items
            </div>
            <div
              onClick={() => setshowFilterWidget(false)}
              className="text-black font-semibold text-3xl cursor-pointer"
            >
              x
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <div className="uppercase">Category</div>
            <div className="flex gap-4 flex-wrap">
              {productCategory?.map((item, i) => (
                <div
                  key={i}
                  className={
                    cat == item
                      ? "py-[6px] px-5 uppercase text-sm bg-black text-white cursor-pointer ease-in duration-300 scale-105"
                      : "py-[6px] px-5 uppercase text-sm bg-[#efefef] text-black cursor-pointer"
                  }
                  onClick={() => (cat != item ? setcat(item) : setcat())}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="uppercase">Price</div>
            <div className="flex flex-col gap-3">
              <input
                onChange={(e) => setpr(e.target.value)}
                type="range"
                min={5000}
                max={300000}
                step={5000}
                // defaultValue={300000}
              />
              <div className="flex items-center justify-between text-black -mt-2">
                <div className="">#5,000</div>
                <div className="">#300,000</div>
              </div>
              <div className="font-semibold text-black text-center">
                #{currencyFormatter(pr).substring(4)}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => handleFilter(e.target.value)}
            className="primary-btn py-2"
          >
            Filter Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFilterWidget;
