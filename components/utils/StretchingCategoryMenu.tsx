import { styled } from "styled-components";
import { IComboBoxType } from "../../constants";
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
import Box from "../basic/Box";
import Typography from "../basic/Typography";
import useIsMobile from "../../hooks/utils/useIsMobile";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  menuItem: IComboBoxType<
    | StretchingMainCategoryType
    | StretchingSubCategoryType
    | StretchingEffectType
  >;
  isSelected: boolean;
  setSelectedItem: Dispatch<
    SetStateAction<
      IComboBoxType<
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
          backgroundColor={isSelected ? colors.softPrimaryColor : colors.f300}
          borderRadius={30}
          width={!isMobile ? 60 : 50}
          height={!isMobile ? 60 : 50}
          boxSahdow="4px 4px 8px rgba(0, 0, 0, 0.1)"
        ></Box>
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
