export const SITE = {
  website: "https://sandaimehyoutan.com",
  author: "三代目ひょうたん",
  desc: "米子市富士見町にある串とん亭日本酒酒場三代目ひょうたん",
  title: "串とん亭日本酒酒場|三代目ひょうたん",
  ogImage: "",
};

export const NAVLINKS = {
  root: import.meta.env.PROD
    ? (import.meta.env.URL_PUBLIC as string) ?? ""
    : (import.meta.env.URL_DEV as string),
  access: "#access",
  concept: "#concept",
  contact: "#contact",
  menu: "#menu",
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 100,
  height: 100,
};

export const SOCIALS = [
  {
    name: "instagram",
    href: "https://www.instagram.com/sandaimehyoutan3/",
    linkTitle: `${SITE.title}Instagram`,
    active: true,
  },
  {
    name: "line",
    href: "https://www.instagram.com/sandaimehyoutan3/",
    linkTitle: `${SITE.title}Instagram`,
    active: true,
  },
  {
    name: "X",
    href: "https://www.instagram.com/sandaimehyoutan3/",
    linkTitle: `${SITE.title}Instagram`,
    active: true,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/sandaimehyoutan3/",
    linkTitle: `${SITE.title}Instagram`,
    active: true,
  },
];

export const phoneNumber = "123-4567-8910";

export const siteMeta = {
  globaltitle: "串とん亭日本酒酒場|三代目ひょうたん",
  globalDesc: "米子市富士見町にある串とん亭日本酒酒場三代目ひょうたん",
};
