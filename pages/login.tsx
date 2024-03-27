import styled from "styled-components";
import Image from "next/image";
import { Box, Typography } from "movester-design-system";
import { useRouter } from "next/router";
import Link from "next/link";
import { KAKAO_INQUIRY_LINK } from "../constants/links";
import useIsMobile from "../hooks/utils/useIsMobile";
import { useCallback, useEffect, useState } from "react";

import { setAccessToken, setRefreshToken } from "../hooks/utils/manage-token";

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_KEY;

const LoginPage = () => {
  const router = useRouter();

  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      await fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&client_secret=${CLIENT_SECRET}&code=${code}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          window.Kakao.Auth.setAccessToken(`${data.access_token}`);
          fetch("/api/login/kakao", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              socialUid: data.access_token,
            }),
          })
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              if (res.accessToken && res.refreshToken) {
                setAccessToken(res.accessToken);
                setRefreshToken(res.refreshToken);
                router.push("/stretchings");
              }
            });
        })

        .catch((error) => console.log("error", error));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router]
  );

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) {
      console.log(kakaoServerError);
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  const kakaoLogin = async () => {
    const response = await window.Kakao.Auth.authorize({
      redirectUri: `${REDIRECT_URI}`,
      scope: "account_email,profile_nickname,profile_image",
    }).then((res) => console.log(res));
  };

  const ismobile = useIsMobile();

  return (
    <PageWrapper>
      <Image
        src={"/logo.png"}
        width={ismobile ? 200 : 400}
        height={ismobile ? 50 : 100}
        alt={""}
        onClick={() => router.push("/stretchings")}
      ></Image>

      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        alignItems="center"
        height={"fit-content"}
        padding={"0 0 64px 0"}
      >
        {ismobile ? (
          <Image
            src={"/kakao_login_medium_narrow.png"}
            width={183}
            height={45}
            alt={""}
            onClick={kakaoLogin}
          ></Image>
        ) : (
          <Image
            src={"/kakao_login_button.png"}
            width={400}
            height={60}
            alt={""}
            onClick={kakaoLogin}
          ></Image>
        )}
        <Link href={KAKAO_INQUIRY_LINK}>
          <Typography variants="body2">문의하기</Typography>
        </Link>
      </Box>
    </PageWrapper>
  );
};

export default LoginPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  div :hover {
    cursor: pointer;
  }
`;
