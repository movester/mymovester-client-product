import styled from "styled-components";
import Image from "next/image";

const LoginPage = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
    });
  };

  return (
    <PageWrapper>
      <Image src={"/logo.png"} width={480} height={120} alt={""}></Image>
      <Image
        src={"/kakao_login_button.png"}
        width={600}
        height={90}
        alt={""}
        onClick={kakaoLogin}
      ></Image>
    </PageWrapper>
  );
};

export default LoginPage;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;
