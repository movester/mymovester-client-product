/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { MemorizedNavigator } from "../components/utils/Navigator";
import { middleware } from "../middleware";
import { keyframes, styled } from "styled-components";
import { colors } from "../constants/style";
import { NextPageContext } from "next";
import { Box, Button, Typography } from "movester-design-system";
import { useInView } from "react-intersection-observer";
import useIsMobile from "../hooks/utils/useIsMobile";
import { useRouter } from "next/router";

const ROUTER_PAGE_STRETCHINGS = "/stretchings";
const ROUTER_PAGE_ROUTINES = "/routines";
const ROUTER_LINK_KAKAOOPENCHATTING = "https://open.kakao.com/o/gtZLyR0c";

const mainPage = ({ isLoggined }) => {
  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const isMobile = useIsMobile();

  const router = useRouter();

  return (
    <PageWrapper>
      <MemorizedNavigator
        isLoggined={isLoggined}
        pageID="HOME"
      ></MemorizedNavigator>
      <ContentWrapper>
        <MainBanner ref={ref1} $visible={inView1} $isMobile={isMobile}>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
            gap={16}
          >
            <HeadingTypo $isMobile={isMobile}>
              {"바쁜 일상 속\n나를 위한 작은 움직임"}
            </HeadingTypo>
            <SubHeadingTypo $isMobile={isMobile}>
              {"잠깐 이면 돼요."}
            </SubHeadingTypo>
          </Box>
          <MainBannerImageWrapper $isMobile={isMobile}>
            <img
              src={"/mainpage_banner1_1.png"}
              width={isMobile ? "100%" : 400}
            ></img>
            <img
              src={"/mainpage_banner1_2.png"}
              width={isMobile ? "100%" : 400}
            ></img>
          </MainBannerImageWrapper>
        </MainBanner>
        <MainBanner ref={ref2} $visible={inView2} $isMobile={isMobile}>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
            gap={isMobile ? 64 : 16}
          >
            <div
              style={{
                paddingBottom: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <HeadingTypo $isMobile={isMobile}>
                {"모든 스트레칭을 한 곳에"}
              </HeadingTypo>
              <SubHeadingTypo $isMobile={isMobile}>
                {"스트레칭 부위, 효과별로\n원하는 스트레칭을 찾아보세요."}
              </SubHeadingTypo>
              {/* </Box> */}
            </div>
            <Box width={isMobile ? "100%" : 300}>
              <Button
                size="md"
                onClick={() => router.push(ROUTER_PAGE_STRETCHINGS)}
              >
                {"스트레칭 구경가기"}
              </Button>
            </Box>
          </Box>

          <ImageMobile $isMobile={isMobile}>
            <img src={"/mainpage1.png"} width={isMobile ? "100%" : 200}></img>
          </ImageMobile>
          <ImageDesktop $isMobile={isMobile}>
            <img src={"/mainpage2.png"} width={500}></img>
          </ImageDesktop>
        </MainBanner>
        <MainBanner ref={ref3} $visible={inView3} $isMobile={isMobile}>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            flexDirection="column"
            width={"100%"}
          >
            <Box
              display="flex"
              alignItems="start"
              justifyContent="start"
              flexDirection="column"
              gap={16}
            >
              <HeadingTypo $isMobile={isMobile}>
                {"즐겁고 간단하게\n스트레칭 습관 형성하기"}
              </HeadingTypo>
              <SubHeadingTypo $isMobile={isMobile}>
                {"나에게 필요한 스트레칭만 담아\n나만의 루틴을 만들어보세요."}
              </SubHeadingTypo>
            </Box>
            <ImageFolder $isMobile={isMobile}>
              <img
                src={"/mainpage_banner3_1.png"}
                width={isMobile ? "100%" : 380}
              ></img>
            </ImageFolder>
            <Box width={isMobile ? "100%" : 300} height={60}>
              <Button
                size="md"
                onClick={() => router.push(ROUTER_PAGE_STRETCHINGS)}
                // disabled={true}
              >
                {"나만의 루틴 만들기"}
              </Button>
            </Box>
          </Box>
        </MainBanner>
        <MainBanner ref={ref4} $visible={inView4} $isMobile={isMobile}>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            flexDirection="column"
            gap={isMobile ? 64 : 16}
            width={"100%"}
          >
            <div
              style={{
                paddingBottom: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <HeadingTypo $isMobile={isMobile}>
                {"함께 하는 즐거움\n스트레칭 알림"}
              </HeadingTypo>
              <SubHeadingTypo $isMobile={isMobile}>
                {
                  "카카오 오픈 채팅방을 통해\n스트레칭 알림 메세지를 받아보세요."
                }
              </SubHeadingTypo>
            </div>
            <KakaoButton
              $isMobile={isMobile}
              onClick={() => router.push(ROUTER_LINK_KAKAOOPENCHATTING)}
            >
              {"스트레칭 알림 받기"}
            </KakaoButton>

            <KakaoImage $isMobile={isMobile}>
              <img
                src={"/mainpage_banner4_2.png"}
                width={isMobile ? "100%" : 300}
              ></img>
            </KakaoImage>
          </Box>
        </MainBanner>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default mainPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: calc(100vh - 70px);
`;
const MainBanner = styled.div<{ $visible: boolean; $isMobile?: boolean }>`
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 800px;
  height: ${(props) => (props.$isMobile ? "100%" : "inherit")};
  padding: ${(props) => (props.$isMobile ? "32px 16px 0 16px" : "64px")};
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? "column" : "row")};
  scroll-snap-align: start;
  div {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    ${(props) =>
      props.$visible
        ? `
      opacity: 1;
      transform: translateY(0);
    `
        : ""}
  }
`;

const HeadingTypo = styled.div<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? "28px" : "32px")};
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 110%;
  word-spacing: 4px;
`;

const SubHeadingTypo = styled.div<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? "18px" : "22px")};
  font-weight: 500;
  white-space: pre-wrap;
  line-height: 110%;
  color: ${colors.g000};
  word-spacing: 2px;
`;

const MainBannerImageWrapper = styled.div<{ $isMobile: boolean }>`
  align-items: end;
  justify-content: center;
  z-index: 30;
  ${(props) =>
    props.$isMobile
      ? `display:block`
      : ` 
        display:flex;
        position: absolute;
        bottom: 0;
        right: 0;`}
`;

const ImageDesktop = styled.div<{ $isMobile: boolean }>`
  z-index: 30;
  ${(props) =>
    props.$isMobile
      ? `  display:none;`
      : ` position: absolute;
  bottom: 0;
  right: 0;

  `}
`;

const ImageMobile = styled.div<{ $isMobile: boolean }>`
  z-index: 50;
  ${(props) =>
    props.$isMobile
      ? `
      width:100%;
      display:flex;
      justify-content:center;
      padding-top:30px;
      `
      : ` position: absolute;
  bottom: -100px;
  right: 400px;
  `}
`;

const ImageFolder = styled.div<{ $isMobile: boolean }>`
  ${(props) =>
    props.$isMobile
      ? `display:block
        padding-bottom:32px;
      `
      : ` 
        position: absolute;
        bottom: 0;
        right: 0;`}
`;
const vibration = keyframes`
0%{
  transform: rotate(1deg);
}
4%{
  transform: rotate(-1deg);
}
8%{
  transform: rotate(1deg);
}
12%{

  transform: rotate(-1deg);
}
16%{
  transform: rotate(1deg);
}
20%{
  transform: rotate(-1deg);
}
24%{
  transform: rotate(1deg);
}
28%{
  transform: rotate(-1deg);
}
100%{
  transform: rotate(0);
}


`;

const KakaoImage = styled.div<{ $isMobile: boolean }>`
  animation: ${vibration} 1.5s infinite;
  ${(props) =>
    props.$isMobile
      ? ``
      : ` 
        display:flex;
        position: absolute;
        bottom: -160px;
        right: 0;`}
`;

const KakaoButton = styled.button<{ $isMobile: boolean }>`
  background-color: #fee500;
  color: #181600;
  &:hover {
    cursor: pointer;
  }
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-weight: bold;
  outline: none;
  box-sizing: border-box;
  width: ${(props) => (props.$isMobile ? "100%" : "300px")};
  height: 60px;
  font-size: 24px;
  border: none;
  outline: none;
  padding: ${(props) => (props.$isMobile ? "32px 0" : 0)};
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"] === "true" ? true : false;

  return { props: { isLoggined } };
};
