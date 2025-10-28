import { Link } from "react-router-dom";
import { footerMenuLinks, footerSocialLinks } from "../../utils/data";
import AppInputField from "./form/AppInputField";
import AppPrimaryButton from "./form/AppPrimaryButton";

const Footer = () => {
  return (
    <div className="w-screen py-5 bg-[#efefef] flex flex-col">
      <div className="container px-5 md:px-0 py-7 grid grid-cols-2 md:grid-cols-10 gap-y-10">
        <div className="col-span-2">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="h-8" />
          </Link>
        </div>

        <div className="col-span-2 md:col-span-3 grid grid-cols-2">
          {footerMenuLinks?.map((item, i) => (
            <div key={i} className="col-span-1 flex flex-col gap-4">
              <div className="text-black font-semibold uppercase">
                {item?.title}
              </div>
              {item?.children?.map((child, childIndex) => (
                <Link key={childIndex} to={child?.childUrl}>
                  {child?.childTitle}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="col-span-2 flex flex-col gap-5">
          <div className="text-black font-semibold uppercase">Follow Us</div>
          <div className="flex items-center gap-2">
            {footerSocialLinks?.map((social, socialIndex) => (
              <Link key={socialIndex} to={social?.url}>
                <img src={`/icons/${social?.img}`} alt="" />
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-2 md:col-span-3 flex flex-col gap-5">
          <div className="text-black font-semibold uppercase">
            Join Our Community
          </div>
          <AppInputField
            name="email"
            placeholder="Email address"
            error={null}
          />
          <AppPrimaryButton title="Submit" />
          <div className="text-xs">
            Join the Yayyu community for exclusive access, special offers, and
            early notifications about our new collections!
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-black "></div>

      <div className="w-full text-yayyuBlack text-center pt-4">
        Copyright © 2025.{" "}
        <span className="text-black font-semibold">Yayyu Lifestyle</span>
      </div>
    </div>
  );
};

export default Footer;
