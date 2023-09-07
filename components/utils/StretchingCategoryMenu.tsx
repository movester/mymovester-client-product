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

interface IProps {
  menuItem: IComboBoxType<
    | StretchingMainCategoryType
    | StretchingSubCategoryType
    | StretchingEffectType
  >;
}

const StretchingCategoryMenu = (props: IProps) => {
  const { menuItem } = props;

  return (
    <Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width={80}
      >
        <Box
          backgroundColor={colors.f000}
          borderRadius={30}
          width={60}
          height={60}
          boxSahdow="4px 4px 8px rgba(0, 0, 0, 0.1)"
        ></Box>
        <Typography variants="body2">{menuItem.name}</Typography>
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
