import { Metadata } from "next";
import { META } from "../../constants";

interface IProps {
  title: string;
  description: string;
  pageUrl: string;
  ogImage: string;
}

export const getMetaData = (props: IProps) => {
  const { title, description, pageUrl, ogImage } = props;

  const TITLE = title ? `${title} | movester` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = pageUrl || "";
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    // verification: {
    //   google: META.googleVerification,
    //   other: {
    //     'naver-site-verification': META.naverVerification,
    //   },
    // },
    // twitter: {
    //   title: TITLE,
    //   description: DESCRIPTION,
    //   images: {
    //     url: OG_IMAGE,
    //   },
    // },
  };

  return metadata;
};
