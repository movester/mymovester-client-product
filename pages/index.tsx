/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { MemorizedNavigator } from "../components/utils/Navigator";
import { middleware } from "../middleware";
import { styled } from "styled-components";
import { colors } from "../constants/style";
import { NextPageContext } from "next";
import { Box, Button, Typography } from "movester-design-system";
import { useInView } from "react-intersection-observer";

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

  return (
    <PageWrapper>
      <MemorizedNavigator
        isLoggined={isLoggined}
        pageID="HOME"
      ></MemorizedNavigator>
      <ContentWrapper>
        <MainBanner ref={ref1} $visible={inView1}>
          <Box
            display="flex"
            alignItems="start"
            justifyContent="start"
            flexDirection="column"
          >
            <HeadingTypo>{"바쁜 일상 속\n나를 위한 작은 움직임"}</HeadingTypo>
            <SubHeadingTypo>{"잠깐 이면 돼요."}</SubHeadingTypo>
          </Box>
          <MainBannerImageWrapper>
            <img src={"/mainpage_banner1_1.png"} width={500}></img>
            <img src={"/mainpage_banner1_2.png"} width={500}></img>
          </MainBannerImageWrapper>
        </MainBanner>
        <MainBanner ref={ref2} $visible={inView2}>
          <Box display="flex" justifyContent="start" flexDirection="column">
            <Box
              display="flex"
              alignItems="start"
              justifyContent="start"
              flexDirection="column"
            >
              <HeadingTypo>{"모든 스트레칭을 한 곳에"}</HeadingTypo>
              <SubHeadingTypo>
                {"스트레칭 부위, 효과별로\n원하는 스트레칭을 찾아보세요."}
              </SubHeadingTypo>
            </Box>
            <Button size="md" width={300}>
              {"스트레칭 구경가기"}
            </Button>
          </Box>

          <ImageMobile>
            <img src={"/mainpage1.png"} width={180}></img>
          </ImageMobile>
          <ImageDesktop>
            <img src={"/mainpage2.png"} width={500}></img>
          </ImageDesktop>
        </MainBanner>
        <MainBanner ref={ref3} $visible={inView3}>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box
              display="flex"
              alignItems="start"
              justifyContent="start"
              flexDirection="column"
            >
              <HeadingTypo>
                {"즐겁고 간단하게\n스트레칭 습관 형성하기"}
              </HeadingTypo>
              <SubHeadingTypo>
                {"나에게 필요한 스트레칭만 담아\n나만의 루틴을 만들어보세요."}
              </SubHeadingTypo>
            </Box>
            <Button size="md" width={300}>
              {"나만의 루틴 만들기"}
            </Button>
          </Box>
          <ImageFolder>
            <img src={"/mainpage_banner3_1.png"} width={380}></img>
          </ImageFolder>
        </MainBanner>
        <MainBannerOpenChatting ref={ref4} $visible={inView4}>
          <img src={"/mainpage_banner4_1.png"} width={400} height={400}></img>

          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box
              display="flex"
              alignItems="start"
              justifyContent="start"
              flexDirection="column"
            >
              <HeadingTypo>{"함께 하는 즐거움\n스트레칭 알림"}</HeadingTypo>
              <SubHeadingTypo>
                {
                  "카카오 오픈 채팅방을 통해\n스트레칭 알림 메세지를 받아보세요."
                }
              </SubHeadingTypo>
            </Box>
            <Button size="md" width={300}>
              {"스트레칭 알림 받기"}
            </Button>
          </Box>
        </MainBannerOpenChatting>
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
const MainBanner = styled.div<{ $visible: boolean }>`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: inherit;
  border: 1px solid red;
  padding: 64px;
  display: flex;
  scroll-snap-align: start;
  div {
    opacity: 0; /* 초기 상태에서 투명하게 */
    transform: translateY(20px); /* 초기 상태에서 약간 아래로 이동 */
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

const MainBannerOpenChatting = styled(MainBanner)`
  justify-content: space-between;
  align-items: center;
`;

const HeadingTypo = styled.div`
  font-size: 58px;
  font-weight: 800;
  white-space: pre-wrap;
`;

const SubHeadingTypo = styled.div`
  font-size: 32px;
  font-weight: 600;
  white-space: pre-wrap;
  color: ${colors.g000};
`;

const MainBannerImageWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  z-index: 30;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ImageDesktop = styled.div`
  position: absolute;
  z-index: 30;
  right: 64px;
  bottom: 64px;
`;

const ImageMobile = styled.div`
  position: absolute;
  z-index: 50;
  right: 450px;
  bottom: -50px;
`;

const ImageFolder = styled.div`
  position: absolute;
  right: 64px;
  bottom: calc(50vh - 350px);
`;

const KaKaoChatImage = styled.div`
  position: absolute;
  left: 64px;
  top: calc(50vh - 200px);
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"] === "true" ? true : false;

  return { props: { isLoggined } };
};
