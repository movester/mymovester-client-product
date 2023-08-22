/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { styled } from "styled-components";
import Box from "../components/basic/Box";
import Divider from "../components/basic/Divder";
import Typography from "../components/basic/Typography";
import ListTableItem from "../components/utils/ListTableItem";
import { colors } from "../constants/style";
import ShadowBox from "../components/utils/ShadowBox";
import {
  StretchingEffectType,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../constants/types";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_MAIN_CATEGORY_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../constants/text";

export interface IDetailData {
  adminId: string | null;
  collect: number;
  createdAt: string;
  effectList: StretchingEffectType[];
  id: string | number;
  imageList: string[];
  mainCategory: StretchingMainCategoryType;
  precautionList: string[];
  set: number;
  subCategory: StretchingSubCategoryType;
  techniqueList: string[];
  title: string;
  updatedAt: string;
  videoUrl: string;
  views: number;
}

interface IProps {
  data: IDetailData;
}

const StretchingDetailView = (props: IProps) => {
  const { data } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={56}
      padding={32}
      height={"100%"}
    >
      <Typography variants="heading1">{data.title}</Typography>
      <Divider></Divider>
      {/* 부위 */}
      <Box>
        <Typography variants="heading2">부위</Typography>
        <Box display="flex" justifyContent="start" alignItems="center">
          <Typography variants="body1">
            {STRETCHING_MAIN_CATEGORY_TEXT[data.mainCategory]}
          </Typography>
          <Typography variants="body1">
            {STRETCHING_SUB_CATEGORY_TEXT[data.subCategory]}
          </Typography>
        </Box>
      </Box>
      {/* 효과 */}
      <Box>
        <Typography variants="heading2">효과</Typography>
        <Box display="flex" justifyContent="start" alignItems="center">
          {data.effectList.map((item, idx) => (
            <Typography variants="body1" key={`detail-effect-${item}-${idx}`}>
              {STRETCHING_EFFECT_TEXT[item]},
            </Typography>
          ))}
        </Box>
      </Box>
      {/* 이미지 */}
      <Box display="grid" gridTemplateColumns="repeat(2,350px)" gap={16}>
        {data.imageList.map((imgLink, index) => (
          <img key={`img-detail-${data.id}-${index}`} src={imgLink}></img>
        ))}
      </Box>
      {/* 스트레칭 방법 및 순서 */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        gap={16}
      >
        <Typography variants="heading2">스트레칭 방법 및 순서</Typography>

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
            <ListTableItem key={`technique-list-${list}`} order={index + 1}>
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
            {data.collect}회 {data.set}세트
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
          <Typography variants="heading2">주의 사항</Typography>

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
          <Typography variants="heading2">참고영상</Typography>
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
  );
};

export default StretchingDetailView;
