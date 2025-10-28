import PageHeader from "../../components/globals/PageHeader";
import { Link } from "react-router-dom";
//import useFetch from "../../api/useFetch";
import useFetch from "../../api/useFetch";
import ShopCard from "../../components/shop/ShopCard";
import ErrorWidget from "../../../src/components/globals/ErrorWidget";
import { useState, useEffect } from "react";
import ShopFilterWidget from "../../components/shop/ShopFilterWidget";

const ShopPage = () => {
  const { data, loading, error } = useFetch("products");

  const [showFilterWidget, setshowFilterWidget] = useState(false);
  const [category, setcategory] = useState();
  const [price, setprice] = useState(0);
  const [filtered, setfiltered] = useState(false);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    if (data) {
      setproducts(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      let newData = data;
      if (category) {
        newData = newData?.filter((item) => {
          const it =
            item?.productCategory.toLowerCase() === category?.toLowerCase();
          return it;
        });
      }
      if (price) {
        newData = newData?.filter((item) => {
          const newItem = item?.price <= price;
          return newItem;
        });
      }
      setproducts(newData);
    }
  }, [data, category, price]);

  const handleRefresh = () => {
    setcategory();
    setprice(0);
    setproducts(data);
    setfiltered(false);
  };

  return (
    <div className="flex flex-col w-screen">
      <PageHeader title="Shop" />
      <div className="container py-20 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          {" "}
          <h2 className="text-xl lg:text-2xl font-semibold">Shop</h2>
          <Link
            to="/admin/products/add-product"
            className="primary-btn py-2 px-5"
          >
            Add New
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <div
              onClick={() => setshowFilterWidget(true)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/icons/filter.svg" alt="" />
              <span className="uppercase">Show Filter</span>
            </div>
            {filtered ? (
              <div
                onClick={handleRefresh}
                className="font-semibold cursor-pointer text-black hover:text-yayyuYellow"
              >
                Refresh
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="uppercase">Sort By</span>
            <img src="/icons/arrow-down.svg" alt="" />
          </div>
        </div>

        <div className="lg:px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products && products.map((item) => <ShopCard item={item} />)}
          {!products.length ? (
            <div className="flex justify-center items-center w-full py-16 lg:py-20 col-span-4">
              <div className="text-xl">No products available</div>
            </div>
          ) : null}
          {error && <ErrorWidget error={error} />}
        </div>
      </div>

      <ShopFilterWidget
        showFilterWidget={showFilterWidget}
        setshowFilterWidget={setshowFilterWidget}
        setcategory={setcategory}
        price={price}
        setprice={setprice}
        setfiltered={setfiltered}
      />
    </div>
  );
};

export default ShopPage;
