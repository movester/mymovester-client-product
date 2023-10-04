import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../../constants/style";
import { useRouter } from "next/router";
import useIsMobile from "../../../hooks/utils/useIsMobile";
import StretchingDetailMobilView from "../../../views/stretchingDetailMobileView";
import StretchingDetailPcView from "../../../views/stretchingDetailPcView";
import useStretchingDetailInquiry from "../../../hooks/api/useStretchingDetailInquiry";

const StretchingDetailPage = () => {
  const router = useRouter();

  const isMobile = useIsMobile();

  const STRETCHING_ID = router.query.id
    ? typeof router.query.id == "string"
      ? router.query.id
      : router.query.id[0]
    : undefined;

  const { data } = useStretchingDetailInquiry({ id: STRETCHING_ID });

  return (
    <PageWrapper>
      {data && (
        <>
          {isMobile ? (
            <StretchingDetailMobilView data={data}></StretchingDetailMobilView>
          ) : (
            <StretchingDetailPcView data={data}></StretchingDetailPcView>
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

const ContentWrapper = styled.div`
  padding: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 16px 16px 32px;
`;
