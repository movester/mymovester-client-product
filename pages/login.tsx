import styled from "styled-components";
import Image from "next/image";
import { Box, Typography } from "movester-design-system";
import { useRouter } from "next/router";
import Link from "next/link";
import { KAKAO_INQUIRY_LINK } from "../constants/links";

const LoginPage = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
    });
  };

  const router = useRouter();

  return (
    <PageWrapper>
      <Image
        src={"/logo.png"}
        width={400}
        height={100}
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
        <Image
          src={"/kakao_login_button.png"}
          width={400}
          height={60}
          alt={""}
          onClick={kakaoLogin}
        ></Image>
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
  gap: 16px;
  div :hover {
    cursor: pointer;
  }
`;
