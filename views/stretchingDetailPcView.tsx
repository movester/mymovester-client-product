/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import Typography from "../components/basic/Typography";
import Navigator from "../components/utils/Navigator";
import { StretchingDetailQueryItemType } from "../constants/types";
import Box from "../components/basic/Box";
import { colors } from "../constants/style";
import ListTableItem from "../components/utils/ListTableItem";
import ShadowBox from "../components/utils/ShadowBox";
import Divider from "../components/basic/Divder";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../constants/text";
import Chip from "../components/basic/Chip";

interface IProps {
  data?: StretchingDetailQueryItemType;
}

const StretchingDetailPcView = (props: IProps) => {
  const { data } = props;
  return (
    <ContentWrapper>
      <Navigator></Navigator>
      <Box
        display="flex"
        flexDirection="column"
        gap={32}
        padding={"120px 32px 32px 32px "}
        height={"100%"}
        width={"100%"}
      >
        <Box display="flex" flexDirection="column" gap={16}>
          <Typography variants="heading1">{data.title}</Typography>
          <Divider></Divider>
        </Box>
        {/* 이미지 */}
        <Box display="grid" gridTemplateColumns="repeat(2,350px)" gap={16}>
          {data.imageList.map((imgLink, index) => (
            <Box
              backgroundColor={colors.f300}
              key={`img-detail-${data.id}-${index}`}
            >
              <img src={imgLink}></img>
            </Box>
          ))}
        </Box>
        {/* 부위 */}
        <Box display="flex" flexDirection="column" gap={12}>
          <Typography variants="heading2">타겟 부위</Typography>
          <Box display="flex" justifyContent="start" alignItems="center">
            <Chip>{STRETCHING_SUB_CATEGORY_TEXT[data.subCategory]}</Chip>
          </Box>
        </Box>
        {/* 효과 */}
        <Box display="flex" flexDirection="column" gap={12}>
          <Typography variants="heading2">기대 효과</Typography>
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap={8}
          >
            {data.effectList.map((item, idx) => (
              <Chip variants="secondary" key={`detail-effect-${item}-${idx}`}>
                {STRETCHING_EFFECT_TEXT[item]}
              </Chip>
            ))}
          </Box>
        </Box>

        {/* 스트레칭 방법 및 순서 */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          gap={16}
        >
          <Typography variants="heading2">🧘🏻‍♀️ 스트레칭 방법 및 순서</Typography>

          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            border={` 1px solid ${colors.g000}`}
            borderRadius={8}
            width={"100%"}
            overflow="hidden"
            flexDirection="column"
            backgroundColor={colors.g000}
            gap={1}
          >
            {data.techniqueList.map((list, index) => (
              <ListTableItem
                key={`technique-list-${list}-${index}`}
                order={index + 1}
              >
                <Typography variants="body1">{list}</Typography>
              </ListTableItem>
            ))}
          </Box>
        </Box>
        <ShadowBox>
          <Box backgroundColor={colors.f200} padding={16} borderRadius={8}>
            <Typography variants="heading2">✨ 권장 횟수</Typography>
            <Typography variants="body1">는 </Typography>
            <Typography variants="heading1">
              {`${data.collect}회 ${data.set}세트`}
            </Typography>
            <Typography variants="body1">입니다.</Typography>
          </Box>
        </ShadowBox>
        {/* 주의 사항 */}
        {data.precautionList.length > 0 && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={16}
          >
            <Typography variants="heading2">⛔️ 주의 사항</Typography>

            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              border={` 1px solid ${colors.g000}`}
              borderRadius={8}
              width={"100%"}
              overflow="hidden"
              flexDirection="column"
              backgroundColor={colors.g000}
              gap={1}
            >
              {data.precautionList.map((list, index) => (
                <ListTableItem key={`technique-list-${list}`} order={index + 1}>
                  <Typography variants="body1">{list}</Typography>
                </ListTableItem>
              ))}
            </Box>
          </Box>
        )}
        {/* 참고영상 */}
        {data.videoUrl && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={16}
            height={"auto"}
          >
            <Typography variants="heading2">📺 참고영상</Typography>
            <Box display="flex" justifyContent="center" width={"100%"}>
              <iframe
                width={550}
                height={400}
                allowFullScreen
                src={data.videoUrl}
              ></iframe>
            </Box>
          </Box>
        )}
      </Box>
    </ContentWrapper>
  );
};

export default StretchingDetailPcView;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;
  overflow-x: scroll;
  max-width: 2560px;
  padding-bottom: 64px;
`;
