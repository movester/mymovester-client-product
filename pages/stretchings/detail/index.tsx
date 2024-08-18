import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../constants/style";
import { useRouter } from "next/router";
import useIsMobile from "../../../hooks/utils/useIsMobile";
import StretchingDetailMobilView from "../../../views/stretchingDetailMobileView";
import StretchingDetailPcView from "../../../views/stretchingDetailPcView";
import useStretchingDetailInquiry from "../../../hooks/api/useStretchingDetailInquiry";
import { Metadata, NextPageContext } from "next";
import { getAccessToken } from "../../../hooks/utils/manage-token";
import useLikeStretching from "../../../hooks/api/useLikeStretching";
import useDislikeStretching from "../../../hooks/api/useDislikeStretching";
import { debounce } from "lodash";
import { getMetaData } from "../../../hooks/utils/getMetaData";
import Head from "next/head";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
} from "../../../constants/text";

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
  }, 500);

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

  useEffect(() => {
    if (data?.isLike !== likeButtonClicked) setLikeButtonClicked(data.isLike);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Head>
        <title>{`${data?.title} | movester`}</title>
        <meta
          name="description"
          content={"바쁜 일상 속 나를 위한 움직임, 뭅스터와 함께해요"}
        />
        <meta property="og:title" content={`${data?.title} | movester`} />
        <meta
          property="og:description"
          content={`${STRETCHING_MAIN_CATEGORY_TEXT[data?.mainCategory]} | ${
            STRETCHING_EFFECT_TEXT[data?.effectList[0]]
          }| 바쁜 일상 속 나를 위한 움직임, 뭅스터와 함께해요.`}
        />
        <meta property="og:image" content={`${data?.imageList[0]}`} />
        <meta
          property="og:url"
          content={`https://movester.kr/stretchings/detail?id=${data?.id}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        {data && (
          <>
            {isMobile ? (
              <StretchingDetailMobilView
                data={data}
                isLiked={likeButtonClicked}
                isLogin={isLoggined}
                handleLikeButton={handleOnClickLikeButton}
              ></StretchingDetailMobilView>
            ) : (
              <StretchingDetailPcView
                data={data}
                isLiked={likeButtonClicked}
                isLogin={isLoggined}
                handleLikeButton={handleOnClickLikeButton}
              ></StretchingDetailPcView>
            )}
          </>
        )}
      </PageWrapper>
    </>
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
