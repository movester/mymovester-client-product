/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { colors } from "../../../constants/style";
import Navigator, {
  KakaoProfileInfoType,
} from "../../../components/utils/Navigator";
import { Box, Typography } from "movester-design-system";
import { useEffect, useState } from "react";
import MyPageNavigator from "../../../components/utils/MyPageNavigator";
import { myPageTabType } from "../../../constants/types";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userProfile } from "../../../recoil/user/atom";

const UserMyPage = () => {
  const [currentTab, _] = useState<myPageTabType>("PROFILE");
  const [userProfileState, setUserProfileState] = useRecoilState(userProfile);

  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        <MyPageNavigator currentTab={currentTab}></MyPageNavigator>
        <ContentArea>
          <Box
            border={`1px solid ${colors.g000}`}
            borderRadius={8}
            padding={"24px 48px"}
            display="flex"
            flexDirection="column"
            gap={16}
            width={"fit-content"}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
            >
              <Box width={160} height={160} borderRadius={80} overflow="hidden">
                <img
                  width={160}
                  height={160}
                  src={userProfileState?.profileUrl}
                ></img>
              </Box>
              <Typography variants="heading3">
                {userProfileState?.nickName + "님"}
              </Typography>
            </Box>
            <Box
              // padding={"0px 8px"}
              border={`1px solid ${colors.g000}`}
              borderRadius={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={24}
              width={40}
            >
              <Typography variants="body3">설정</Typography>
            </Box>
          </Box>
        </ContentArea>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default UserMyPage;

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
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 24px;
`;

const ContentArea = styled.div`
  flex-grow: 1;
  display: block;
  width: 300px;
`;
