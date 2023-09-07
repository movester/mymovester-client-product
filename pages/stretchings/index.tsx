import { styled } from "styled-components";
import Navigator from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import ShadowBox from "../../components/utils/ShadowBox";
import Typography from "../../components/basic/Typography";
import Button from "../../components/basic/Button";
import ComboBox from "../../components/basic/ComboBox";
import { useState } from "react";
import Input from "../../components/basic/Input";
import { useRouter } from "next/router";
import Box from "../../components/basic/Box";
import {
  EFFECT_CATEGORY,
  IComboBoxType,
  ITotalComboxType,
  LIST_ORDER_CATEGORY,
  LOWER_BODY_CATEGORY,
  LOWER_BODY_SEARCH_CATEGORY,
  STRETCHING_MAIN_CATEGORY,
  STRETCHING_MAIN_SEARCH_CATEGORY,
  UPPER_BODY_SEARCH_CATEGORY,
} from "../../constants";
import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";

import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../../constants/text";
import CategoryButton from "../../components/utils/CategoryButton";
import useIsMobile from "../../hooks/utils/useIsMobile";

const StrechingPage = () => {
  const labelItems = [
    { label: "타겟 부위", labelId: "sections" },
    { label: "효과", labelId: "effects" },
  ];

  const isMobile = useIsMobile();

  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        {!isMobile && <CategoryButton labelItems={labelItems}></CategoryButton>}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StrechingPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
`;

const ContentWrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const BreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 32px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.g300};
  gap: 1px;
`;

const TableGirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.f200};
  gap: 1px;
  :hover {
    div {
      background-color: ${colors.f100};
      cursor: pointer;
    }
  }
`;

const TableGrid = styled.div`
  background-color: ${colors.f200};
  gap: 1px;
  display: grid;
  grid-template-columns:
    minmax(360px, 9fr) minmax(200px, 5fr) minmax(280px, 7fr)
    minmax(80px, 2fr) minmax(120px, 3fr);
  align-items: end;
`;
const TableItem = styled.div`
  background-color: ${colors.f000};
  width: 100%;
  padding: 16px;
  height: 100%;
  text-align: start;
  display: flex;
  align-items: center;
`;
