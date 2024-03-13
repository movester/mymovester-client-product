import React, { useEffect } from "react";
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

const StretchingDetailPage = ({ isLoggined }) => {
  const router = useRouter();

  const isMobile = useIsMobile();

  const STRETCHING_ID = router.query.id
    ? typeof router.query.id == "string"
      ? router.query.id
      : router.query.id[0]
    : undefined;

  const accessToken = getAccessToken();

  const { data } = useStretchingDetailInquiry({
    id: STRETCHING_ID,
    token: accessToken,
  });

  const { mutate: handleLikeStretching } = useLikeStretching({ id: data?.id });
  const { mutate: handleDisLikeStretching } = useDislikeStretching({
    id: data?.id,
  });

  const handleOnClickLikeButton = () => {
    if (data.isLike) {
      handleDisLikeStretching(accessToken);
    } else {
      handleLikeStretching(accessToken);
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
              isLoggined={isLoggined === "true" ? true : false}
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
  const isLoggined = req.headers["x-loggined"];

  return { props: { isLoggined } };
};
