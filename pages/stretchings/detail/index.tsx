import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../../constants/style";
import ShadowBox from "../../../components/utils/ShadowBox";
import Typography from "../../../components/basic/Typography";
import Box from "../../../components/basic/Box";
import Navigator from "../../../components/utils/Navigator";
import Button from "../../../components/basic/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import StretchingDetailView from "../../../views/stretchingDetailView";
import StretchingModifyView from "../../../views/stretchingModifyView";

const StretchingDetailPage = () => {
  return (
    <PageWrapper>
      <Navigator></Navigator>
    </PageWrapper>
  );
};

export default StretchingDetailPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f100};
  height: 100%;
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