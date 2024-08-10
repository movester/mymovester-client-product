import React, { useEffect } from "react";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import { RecoilEnv } from "recoil";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);

    RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  }

  return (
    <>
      <RecoilRoot>
        <Head>
          <title>{"movester"}</title>
          <meta
            name="description"
            content={"바쁜 일상 속 나를 위한 움직임, 뭅스터와 함께해요"}
          />
          <meta property="og:title" content={"뭅스터"} />
          <meta
            property="og:description"
            content={"바쁜 일상 속 나를 위한 움직임, 뭅스터와 함께해요"}
          />
          <meta property="og:image" content={"/"} />
          <meta property="og:url" content={"https://movester.kr"} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
          integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4"
          crossOrigin="anonymous"
          onLoad={kakaoInit}
        ></Script>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
