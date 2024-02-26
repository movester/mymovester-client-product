import { styled } from "styled-components";
import { colors } from "../../../constants/style";
import MyPageNavigator from "../../../components/utils/MyPageNavigator";
import { Typography } from "movester-design-system";
import { useState } from "react";
import { MemorizedNavigator } from "../../../components/utils/Navigator";
import { myPageTabType } from "../../../constants/types";

const UserActivitiesLikePage = () => {
  const [currentTab, _] = useState<myPageTabType>("LIKES");
  return (
    <PageWrapper>
      <MemorizedNavigator></MemorizedNavigator>
      <ContentWrapper>
        <MyPageNavigator currentTab={currentTab}></MyPageNavigator>
        <ContentArea>
          <Typography>sss</Typography>
        </ContentArea>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default UserActivitiesLikePage;

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
