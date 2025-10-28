export const headerMenuLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Shop",
    children: [
      {
        title: "Collection",
        url: "/shop",
      },
      {
        title: "Category",
        url: "/shop",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const footerMenuLinks = [
  {
    title: "Quick Links",
    children: [
      {
        childTitle: "Home",
        childUrl: "/",
      },
      {
        childTitle: "Categories",
        childUrl: "/shop",
      },
      {
        childTitle: "About Us",
        childUrl: "/about",
      },
      {
        childTitle: "Contact",
        childUrl: "/contact",
      },
      {
        childTitle: "FAQs",
        childUrl: "/faqs",
      },
    ],
  },
  {
    title: "Legal",
    children: [
      {
        childTitle: "Privacy Policy",
        childUrl: "/privacy-policy",
      },
      {
        childTitle: "Shipping Policy",
        childUrl: "/shipping-policy",
      },
      {
        childTitle: "Delivery Policy",
        childUrl: "/delivery-policy",
      },
      {
        childTitle: "Return Policy",
        childUrl: "/return-policy",
      },
    ],
  },
];

export const footerSocialLinks = [
  {
    url: "https://facebook.com",
    img: "facebook.svg",
  },
  {
    url: "https://instagram.com",
    img: "instagram.svg",
  },
  {
    url: "https://tiktok.com",
    img: "tiktok.svg",
  },
  {
    url: "https://x.com",
    img: "x.svg",
  },
  {
    url: "https://linkedin.com",
    img: "linkedin.svg",
  },
];

export const shopTabData = ["Description", "Details", "Reviews"];

export const productCategory = ["Set", "Pant", "Suite", "Dress"];
