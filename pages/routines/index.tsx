/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPageContext } from "next";
import { MemorizedNavigator } from "../../components/utils/Navigator";
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { Box, Typography } from "movester-design-system";
import { userProfile } from "../../recoil/user/atom";
import { useRecoilState } from "recoil";
import { FaGooglePlus, FaPlus, FaUser } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import RoutineThumnail from "../../components/utils/RoutineThumnail";

const RoutineData = {
  title: "거북목 탈출",
  items: [
    {
      imageUrl:
        "https://mymovester.s3.ap-northeast-2.amazonaws.com/%C3%AC%C2%8A%C2%A4%C3%AD%C2%8A%C2%B8%C3%AB%C2%A0%C2%88%C3%AC%C2%B9%C2%AD%20%2325_1694361637233.png",
    },
    {
      imageUrl:
        "https://mymovester.s3.ap-northeast-2.amazonaws.com/%C3%AC%C2%8A%C2%A4%C3%AD%C2%8A%C2%B8%C3%AB%C2%A0%C2%88%C3%AC%C2%B9%C2%AD%20%2317-2_1694360823145.png",
    },
    {
      imageUrl:
        "https://mymovester.s3.ap-northeast-2.amazonaws.com/%C3%AC%C2%8A%C2%A4%C3%AD%C2%8A%C2%B8%C3%AB%C2%A0%C2%88%C3%AC%C2%B9%C2%AD%20%2321_1694361062724.png",
    },
  ],
};

const RoutinePage = ({ isLoggined }) => {
  const [userProfileState] = useRecoilState(userProfile);
  return (
    <PageWrapper>
      <MemorizedNavigator
        isLoggined={isLoggined === "true" ? true : false}
      ></MemorizedNavigator>
      <ContentWrapper>
        {/* 프로필 부분 */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={16}
        >
          <Box
            width={160}
            height={160}
            borderRadius={80}
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={colors.g200}
          >
            {userProfileState && userProfileState.profileUrl ? (
              <img
                width={160}
                height={160}
                src={userProfileState.profileUrl}
              ></img>
            ) : (
              <FaUser size={90} color="white"></FaUser>
            )}
          </Box>
          <Typography variants="heading2">
            {`${userProfileState?.nickName}님의 루틴`}
          </Typography>
        </Box>
        {/* 툴바 부분 */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={"100%"}
        >
          <IconWrppaer>
            <LuSettings2></LuSettings2>
          </IconWrppaer>
          <IconWrppaer>
            <FiPlus></FiPlus>
          </IconWrppaer>
        </Box>
        {/* 루틴 부분 */}
        <RoutineWrapper>
          <RoutineThumnail data={RoutineData}></RoutineThumnail>
          <RoutineThumnail data={RoutineData}></RoutineThumnail>
        </RoutineWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default RoutinePage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;
const ContentWrapper = styled.div`
  padding: 0 32px;
  gap: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconWrppaer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const RoutineWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  gap: 8px;
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"];

  return { props: { isLoggined } };
};
