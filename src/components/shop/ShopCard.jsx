import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/helper";

const ShopCard = ({ item }) => {
  return (
    <Link
      key={item?.id}
      to={`/shop/${item?.permalink}`}
      className="col-span-1 flex flex-col items-center gap-2"
    >
      <img
        src={`/images/shop/${item.productImage[0]}`}
        alt={`${item?.productTitle} - ${process.env.REACT_APP_NAME}`}
        className="shop-img mb-2"
      />
      <h1 className="text-sm text-black font-normal uppercase">
        {item?.productTitle}
      </h1>
      <span className="text-[15px]">
        {currencyFormatter(item?.price).toString().substring(4)}
      </span>
    </Link>
  );
};

export default ShopCard;
