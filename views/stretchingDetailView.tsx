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

const StretchingDetailView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={56}
      padding={32}
      height={"100%"}
    >
      <Typography variants="heading1"> 하체 붓기 빼기 스트레칭</Typography>
      <Divider></Divider>
      {/* 부위 */}
      <Box>
        <Typography variants="heading2">부위</Typography>
        <Box display="flex" justifyContent="start" alignItems="center">
          <Typography variants="body1">하체</Typography>
          <Typography variants="body1">중든근/허벅지</Typography>
        </Box>
      </Box>
      {/* 효과 */}
      <Box>
        <Typography variants="heading2">효과</Typography>
        <Box display="flex" justifyContent="start" alignItems="center">
          <Typography variants="body1">혈액순환 개선</Typography>
          <Typography variants="body1">붓기 제거</Typography>
        </Box>
      </Box>
      {/* 이미지 */}
      <Box display="grid" gridTemplateColumns="repeat(2,1fr)">
        <img src="https://mymovester.s3.ap-northeast-2.amazonaws.com/bbomi2222_1692091318874.png"></img>
        <img src="https://mymovester.s3.ap-northeast-2.amazonaws.com/bbomi2222_1692091318874.png"></img>
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
        >
          <ListTableItem order={1}>
            <Typography variants="body1">설명설명설명</Typography>
          </ListTableItem>
        </Box>
      </Box>
      <ShadowBox>
        <Box backgroundColor={colors.f200} padding={16} borderRadius={8}>
          <Typography variants="heading2">✨ 권장 횟수</Typography>
          <Typography variants="body1">는 </Typography>
          <Typography variants="heading1">10회 2세트 </Typography>
          <Typography variants="body1">입니다.</Typography>
        </Box>
      </ShadowBox>
      {/* 주의 사항 */}
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
        >
          <ListTableItem order={1}>
            <Typography variants="body1">설명설명설명</Typography>
          </ListTableItem>
        </Box>
      </Box>
      {/* 참고영상 */}
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
            src="https://www.youtube.com/embed/Kaapaq3WVQ0"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default StretchingDetailView;
