import { Link } from "react-router-dom";
import { headerMenuLinks } from "../../utils/data";
import { useState } from "react";

const Navbar = () => {
  const [showDropDownMenu, setshowDropDownMenu] = useState(false);

  return (
    <div className="w-screen py-4 bg-white drop-shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="w-[40%] flex items-center gap-10">
          {headerMenuLinks?.map((item, i) => (
            <div key={i} className="">
              {item?.children ? (
                <div className="relative">
                  <div
                    className="header-menu-link flex items-center gap-0"
                    onClick={() => setshowDropDownMenu(!showDropDownMenu)}
                  >
                    <span className="">{item?.title}</span>
                    <img src="/icons/arrow-down.svg" alt="" />
                  </div>
                  <div
                    className={
                      showDropDownMenu
                        ? "absolute top-14 -right-11 w-40 flex flex-col gap-2 border-t-[4px] border-t-yayyuYellow py-6 px-3 bg-white"
                        : "hidden"
                    }
                  >
                    {item?.children?.map((element, eleIndex) => (
                      <Link
                        key={eleIndex}
                        to={element.url}
                        onClick={() => setshowDropDownMenu(false)}
                        className="header-menu-link"
                      >
                        {element?.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.url}
                  onClick={() => setshowDropDownMenu(false)}
                  className="header-menu-link"
                >
                  {item?.title}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="w-[20%] flex justify-center">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="h-11" />
          </Link>
        </div>
        <div className="w-[40%] flex gap-5 justify-end items-center">
          <Link to="/account">
            <img src="/icons/account.svg" alt="" />
          </Link>
          <Link to="/wishlist" className="relative">
            <img src="/icons/like.svg" alt="" />
            <div className="w-4 h-4 rounded-full bg-red-600 absolute -top-2 -right-2 flex justify-center items-center text-white font-medium text-xs">
              0
            </div>
          </Link>
          <Link to="">
            <img src="/icons/search.svg" alt="" />
          </Link>
          <Link to="/" className="relative">
            <img src="/icons/cart.svg" alt="" />
            <div className="w-4 h-4 rounded-full bg-red-600 absolute -top-2 -right-2 flex justify-center items-center text-white font-medium text-xs">
              0
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
