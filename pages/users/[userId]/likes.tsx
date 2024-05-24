/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { colors } from "../../../constants/style";
import MyPageNavigator from "../../../components/utils/MyPageNavigator";
import { Box, Chip, Typography } from "movester-design-system";
import { useState } from "react";
import { MemorizedNavigator } from "../../../components/utils/Navigator";
import { myPageTabType } from "../../../constants/types";
import { NextPageContext } from "next";
import useStretchingLikeListsInquiry from "../../../hooks/api/useStretchingLikeListsInquiry";
import { getAccessToken } from "../../../hooks/utils/manage-token";
import Image from "next/image";
import {
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../../../constants/text";
import { useRouter } from "next/router";

const UserActivitiesLikePage = ({ isLoggined }) => {
  const [currentTab, _] = useState<myPageTabType>("LIKES");

  const accessToken = getAccessToken();

  const router = useRouter();

  const { data } = useStretchingLikeListsInquiry({ token: accessToken });

  const handleOnClickStretchingItem = (id: number) => {
    router.push(`/stretchings/detail?id=${id}`);
  };

  return (
    <PageWrapper>
      <MemorizedNavigator
        pageID="USERS"
        isLoggined={isLoggined === "true" ? true : false}
      ></MemorizedNavigator>
      <ContentWrapper>
        <MyPageNavigator currentTab={currentTab}></MyPageNavigator>
        <ContentArea>
          {data &&
            data.stretchingList.map((listItem) => (
              <Content
                key={`user-likeList-${listItem.id}`}
                onClick={() => handleOnClickStretchingItem(listItem.id)}
              >
                <img src={listItem.imageUrl}></img>
                <Typography>{listItem.title}</Typography>
                <Box display="flex" justifyContent="start" gap={4}>
                  {/* chip xs 사이즈 구현시 적용 */}
                  <Chip size="sm">
                    {STRETCHING_MAIN_CATEGORY_TEXT[listItem.mainCategory]}
                  </Chip>
                  <Typography color={colors.g100}>
                    {STRETCHING_SUB_CATEGORY_TEXT[listItem.subCategory]}
                  </Typography>
                </Box>
              </Content>
            ))}
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  border-radius: 8px;
  padding: 8px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"];

  if (isLoggined === "false") {
    return {
      redirect: {
        permanent: false,
        destination: `${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
      },
    };
  }

  return { props: { isLoggined } };
};
