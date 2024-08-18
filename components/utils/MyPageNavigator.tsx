import { Box, Typography } from "movester-design-system";
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { Router, useRouter } from "next/router";
import { myPageTabType } from "../../constants/types";

interface IStyleProps {
  isclicked: boolean;
}

interface IProps {
  currentTab: myPageTabType;
}

const myPageTabNavigatorInfo: { [key in myPageTabType]: string } = {
  PROFILE: " ",
  LIKES: "likes",
  EDIT: "edit",
};

const MyPageNavigator = (props: IProps) => {
  const { currentTab } = props;
  const router = useRouter();

  const handleOnClickTabItem = (tabId: myPageTabType) => {
    const userId = router.query.userId;

    router.push(`/users/${userId}/${myPageTabNavigatorInfo[tabId]}`);
  };

  return (
    <SubNavigator>
      <SubNavigatorSectionBox>
        <Typography variants="body2" color={colors.g000}>
          계정 설정
        </Typography>
        <SubNavigatorListItem
          isclicked={currentTab === "PROFILE"}
          onClick={() => handleOnClickTabItem("PROFILE")}
        >
          <Typography variants="body2">나의 프로필</Typography>
        </SubNavigatorListItem>
        <SubNavigatorListItem
          isclicked={currentTab === "EDIT"}
          onClick={() => handleOnClickTabItem("EDIT")}
        >
          <Typography variants="body2">회원정보 수정</Typography>
        </SubNavigatorListItem>
      </SubNavigatorSectionBox>
      <SubNavigatorSectionBox>
        <Typography variants="body2" color={colors.g000}>
          활동
        </Typography>
        <SubNavigatorListItem
          isclicked={currentTab === "LIKES"}
          onClick={() => handleOnClickTabItem("LIKES")}
        >
          <Typography variants="body2">좋아요</Typography>
        </SubNavigatorListItem>
      </SubNavigatorSectionBox>
    </SubNavigator>
  );
};

export default MyPageNavigator;

const SubNavigator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100px;
  max-width: 200px;
  word-break: keep-all;
`;

const SubNavigatorSectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const SubNavigatorListItem = styled.button<IStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: 0;
  background-color: ${({ isclicked }) =>
    isclicked ? " rgba(0, 0, 0, 0.1)" : "transparent"};
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
