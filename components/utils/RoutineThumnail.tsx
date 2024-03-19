/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "movester-design-system";
import styled from "styled-components";
import { colors } from "../../constants/style";

interface IProps {
  data: { title: string; items: { imageUrl: string }[] };
}

const RoutineThumnail = (props: IProps) => {
  const { data } = props;
  return (
    <ItemWrapper>
      <ThumbnailWrapper>
        <Box backgroundColor="white">
          <img src={data.items[0].imageUrl}></img>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Box backgroundColor="white">
            <img src={data.items[1].imageUrl}></img>
          </Box>
          <Box backgroundColor="white">
            <img src={data.items[2].imageUrl}></img>
          </Box>
        </Box>
      </ThumbnailWrapper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        gap={0}
        padding={0}
      >
        <Typography variants="heading2">{data.title}</Typography>
        <Typography>{`스트레칭 ${data.items.length}개`}</Typography>
      </Box>
    </ItemWrapper>
  );
};
const ItemWrapper = styled.div``;

const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1px;
  border-radius: 16px;
  border: solid 1px ${colors.g000};
  overflow: hidden;
  background-color: ${colors.g000};
`;

export default RoutineThumnail;
