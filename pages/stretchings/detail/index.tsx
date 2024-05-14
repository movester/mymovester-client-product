import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../constants/style";
import { useRouter } from "next/router";
import useIsMobile from "../../../hooks/utils/useIsMobile";
import StretchingDetailMobilView from "../../../views/stretchingDetailMobileView";
import StretchingDetailPcView from "../../../views/stretchingDetailPcView";
import useStretchingDetailInquiry from "../../../hooks/api/useStretchingDetailInquiry";
import { NextPageContext } from "next";
import { getAccessToken } from "../../../hooks/utils/manage-token";
import useLikeStretching from "../../../hooks/api/useLikeStretching";
import useDislikeStretching from "../../../hooks/api/useDislikeStretching";
import { debounce } from "lodash";

const StretchingDetailPage = ({ isLoggined }) => {
  const router = useRouter();

  const isMobile = useIsMobile();

  const STRETCHING_ID = router.query.id
    ? typeof router.query.id == "string"
      ? router.query.id
      : router.query.id[0]
    : undefined;

  const accessToken = getAccessToken();

  const { data, refetch } = useStretchingDetailInquiry({
    id: STRETCHING_ID,
    token: accessToken,
  });

  const [likeButtonClicked, setLikeButtonClicked] = useState<boolean>(
    data?.isLike
  );

  const { mutate: handleLikeStretching } = useLikeStretching({ id: data?.id });
  const { mutate: handleDisLikeStretching } = useDislikeStretching({
    id: data?.id,
  });

  const likeDebounce = debounce(() => {
    if (likeButtonClicked) {
      handleDisLikeStretching(accessToken);
    } else {
      handleLikeStretching(accessToken);
    }
  }, 1000);

  const handleOnClickLikeButton = () => {
    if (isLoggined) {
      setLikeButtonClicked((prev) => !prev);
      likeDebounce();
    } else {
      const isConfirm = window.confirm(
        "로그인이 필요한 기능 입니다.로그인 페이지로 이동하시겠습니까?"
      );
      if (isConfirm) {
        router.push("/login");
      }
    }
  };

  return (
    <PageWrapper>
      {data && (
        <>
          {isMobile ? (
            <StretchingDetailMobilView data={data}></StretchingDetailMobilView>
          ) : (
            <StretchingDetailPcView
              data={data}
              isLiked={likeButtonClicked}
              isLoggined={isLoggined}
              handleLikeButton={handleOnClickLikeButton}
            ></StretchingDetailPcView>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default StretchingDetailPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"] === "true" ? true : false;

  return { props: { isLoggined } };
};
