import React, { useEffect } from "react";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DragDropContext } from "react-beautiful-dnd";
import Head from "next/head";
import Script from "next/script";

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
    console.log("카카오", window.Kakao.isInitialized());
  }

  return (
    <>
      <Head>
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
    </>
  );
}

export default MyApp;
