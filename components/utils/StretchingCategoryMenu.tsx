/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { ICategoryIconBoxType, IComboBoxType } from "../../constants";
import { colors } from "../../constants/style";
import {
  STRETCHING_SUB_CATEGORY_TEXT,
  STRETCHING_TOTAL_CATEGORTY_TEXT,
} from "../../constants/text";
import {
  StretchingEffectType,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";

import useIsMobile from "../../hooks/utils/useIsMobile";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "movester-design-system";

interface IProps {
  menuItem: ICategoryIconBoxType<
    | StretchingMainCategoryType
    | StretchingSubCategoryType
    | StretchingEffectType
  >;
  isSelected: boolean;
  setSelectedItem: Dispatch<
    SetStateAction<
      ICategoryIconBoxType<
        | StretchingMainCategoryType
        | StretchingSubCategoryType
        | StretchingEffectType
      >
    >
  >;
}

const StretchingCategoryMenu = (props: IProps) => {
  const { menuItem, isSelected, setSelectedItem } = props;

  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={!isMobile ? 80 : 70}
        gap={4}
        onClick={() => setSelectedItem(menuItem)}
      >
        <Box
          backgroundColor={isSelected ? "#A6A0D2" : colors.f300}
          borderRadius={30}
          width={!isMobile ? 60 : 50}
          height={!isMobile ? 60 : 50}
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSahdow="4px 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            src={menuItem.img}
            width={!isMobile ? 50 : 40}
            height={!isMobile ? 50 : 40}
            alt={""}
          ></Image>
        </Box>
        <Typography variants={isSelected ? "heading3" : "body2"}>
          {menuItem.name}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default StretchingCategoryMenu;

const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
`;
