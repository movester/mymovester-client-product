import { styled } from "styled-components";
import { colors } from "../../../constants/style";
import { MemorizedNavigator } from "../../../components/utils/Navigator";
import { Box, Button, Input, Typography } from "movester-design-system";
import { useEffect, useState } from "react";
import MyPageNavigator from "../../../components/utils/MyPageNavigator";
import { myPageTabType } from "../../../constants/types";
import { useRouter } from "next/router";

const UserMyPage = () => {
  const [currentTab, _] = useState<myPageTabType>("EDIT");
  const [userName, setUserName] = useState<string>("movcoco");

  const router = useRouter();

  const handleUserInfo = async () => {
    await window.Kakao.API.request({
      url: "/v2/user/me",
      data: {
        property_keys: ["kakao_account.email"],
      },
    }).then((res) => console.log(res));
  };

  useEffect(() => {
    if (window.Kakao) {
      handleUserInfo();
    }
  }, []);

  return (
    <PageWrapper>
      <MemorizedNavigator></MemorizedNavigator>
      <ContentWrapper>
        <MyPageNavigator currentTab={currentTab}></MyPageNavigator>
        <ContentArea>
          <Box
            border={`1px solid ${colors.g000}`}
            borderRadius={8}
            padding={24}
            display="flex"
            flexDirection="column"
            gap={16}
            justifyContent="center"
            alignItems="start"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variants="heading2">회원정보 수정</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="start"
              alignItems="start"
              gap={16}
            >
              <Box width={80}>
                <Typography variants="body2">프로필 이미지</Typography>
              </Box>
              <Box
                width={60}
                height={60}
                borderRadius={30}
                backgroundColor={colors.g000}
              ></Box>
            </Box>
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              gap={32}
            >
              <Box width={80}>
                <Typography variants="body2">이름</Typography>
              </Box>
              <Input
                value={userName}
                setValue={(e) => setUserName(e.target.value)}
              ></Input>
            </Box>
            <Box
              width={"100%"}
              display="flex"
              justifyContent="end"
              alignItems="center"
            >
              <WithdrawalButton onClick={() => router.push("/withdrawal")}>
                <Typography variants="body2" color={colors.r000}>
                  탈퇴하기
                </Typography>
              </WithdrawalButton>
            </Box>
            <Box width={"100%"} display="flex" justifyContent="center">
              <Box width={240}>
                <Button variants="primary" size="xs" disabled={true}>
                  회원정보 수정
                </Button>
              </Box>
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

const WithdrawalButton = styled.div`
  border-bottom: 1px solid ${colors.r000};
  display: flex;
  gap: 0;
  :hover {
    cursor: pointer;
  }
`;
