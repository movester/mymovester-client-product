/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import Box from "../basic/Box";
import { colors } from "../../constants/style";
import Typography from "../basic/Typography";
import { StretchingQueryItemType } from "../../constants/types";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../../constants/text";

interface IProps {
  stretchingItem: StretchingQueryItemType;
}

const DetailThumnailItem = (props: IProps) => {
  const { stretchingItem } = props;
  return (
    <Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        width={"100%"}
        gap={8}
      >
        <Box
          width={"100%"}
          backgroundColor={colors.g000}
          borderRadius={8}
          boxSahdow="4px 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <img src={stretchingItem.imageUrl}></img>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          gap={4}
        >
          <Typography variants="heading2">{stretchingItem.title}</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={0}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="start"
              height="fit-content"
              gap={4}
            >
              <Typography variants="heading3" color={colors.g100}>
                {STRETCHING_MAIN_CATEGORY_TEXT[stretchingItem.mainCategory]}
              </Typography>
              <Typography variants="heading3" color={colors.g100}>
                {"|"}
              </Typography>
              <Typography variants="body2" color={colors.g100}>
                {STRETCHING_SUB_CATEGORY_TEXT[stretchingItem.subCategory]}
              </Typography>
            </Box>

            <Typography variants="body2" color={colors.g100}>
              {STRETCHING_EFFECT_TEXT[stretchingItem.effect]}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default DetailThumnailItem;

const Wrapper = styled.div`
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;
