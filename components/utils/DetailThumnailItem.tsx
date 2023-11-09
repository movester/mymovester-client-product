/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";

import { colors } from "../../constants/style";

import { StretchingQueryItemType } from "../../constants/types";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../../constants/text";
import { Box, Typography } from "movester-design-system";

interface IProps {
  stretchingItem: StretchingQueryItemType;
  onClick: (stretchingId: number) => void;
}

const DetailThumnailItem = (props: IProps) => {
  const { stretchingItem, onClick } = props;
  return (
    <Wrapper onClick={() => onClick(stretchingItem.id)}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        width={"100%"}
        gap={8}
      >
        <Box width={"100%"} backgroundColor={colors.f300} borderRadius={8}>
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
