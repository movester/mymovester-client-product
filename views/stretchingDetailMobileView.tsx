/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { styled } from "styled-components";
import { StretchingDetailQueryItemType } from "../constants/types";
import { colors } from "../constants/style";
import Slider from "react-slick";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../constants/text";
import ListTableItem from "../components/utils/ListTableItem";
import ShadowBox from "../components/utils/ShadowBox";
import { BiChevronLeft } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import { useRouter } from "next/router";
import { Box, Chip, Typography } from "movester-design-system";

interface IProps {
  data: StretchingDetailQueryItemType;
  isLogin: boolean;
  handleLikeButton: () => void;
  isLiked: boolean;
}

const StretchingDetailMobilView = (props: IProps) => {
  const { data, isLogin, handleLikeButton, isLiked } = props;
  const [heartClicked, setHeartClicked] = useState<boolean>(false);
  const router = useRouter();

  const handleOnClickShareURL = () => {
    navigator.clipboard.writeText(window.location.href);
    window.alert("링크가 복사되었습니다!");
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContentWrapper>
      <NavigatorBar>
        <Box
          width={32}
          height={32}
          backgroundColor={colors.f000}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius={16}
          boxSahdow="4px 4px 4px rgba(0,0,0,0.1)"
          onClick={() => router.push("/stretchings")}
        >
          <BiChevronLeft size={20}></BiChevronLeft>
        </Box>
        <SocialBoxWrapper>
          {/* {isVisible && <DevelopOngoingSign></DevelopOngoingSign>} */}
          <Box
            width={32}
            height={32}
            backgroundColor={colors.f000}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius={16}
            boxSahdow="4px 4px 4px rgba(0,0,0,0.1)"
            onClick={handleOnClickShareURL}
          >
            <LuShare size={16}></LuShare>
          </Box>
          <Box
            width={32}
            height={32}
            backgroundColor={colors.f000}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius={16}
            boxSahdow="4px 4px 4px rgba(0,0,0,0.1)"
            onClick={handleLikeButton}
          >
            {isLiked ? (
              <AiFillHeart size={16} color={colors.r000}></AiFillHeart>
            ) : (
              <AiOutlineHeart size={16}></AiOutlineHeart>
            )}
          </Box>
        </SocialBoxWrapper>
      </NavigatorBar>
      {/* 이미지 */}
      <Box width={"100%"}>
        <Slider {...settings} vertical={false} variableWidth={false}>
          {data.imageList.map((imgLink, index) => (
            <Box
              backgroundColor={colors.f300}
              key={`img-detail-${data.id}-${index}`}
              width={"100%"}
              height={"fit-content"}
            >
              <img
                key={`img-detail-${data.id}-${index}`}
                width={"100%"}
                src={imgLink}
              ></img>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        padding={16}
        display="flex"
        flexDirection="column"
        gap={16}
        width={"100%"}
      >
        {/* 제목 */}
        <Box>
          <Typography variants="heading2">{data.title}</Typography>
        </Box>
        {/* 부위 , 효과 */}
        <Box display="flex" justifyContent="start" alignItems="center" gap={8}>
          <Chip size="sm">
            {STRETCHING_SUB_CATEGORY_TEXT[data.subCategory]}
          </Chip>

          {data.effectList.map((item, idx) => (
            <Chip
              size="sm"
              variants="secondary"
              key={`detail-effect-${item}-${idx}`}
            >
              {STRETCHING_EFFECT_TEXT[item]}
            </Chip>
          ))}
        </Box>
        {/* 권장횟수 */}
        <ShadowBox>
          <Box
            backgroundColor={colors.f200}
            padding={16}
            borderRadius={8}
            display="flex"
            flexDirection="column"
          >
            <Typography variants="heading3">권장 횟수</Typography>
            <Typography variants="heading3">
              {`${data.collect}회 X ${data.set}세트`}
            </Typography>
          </Box>
        </ShadowBox>

        {/* 스트레칭 순서 */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="start"
          gap={8}
        >
          <Typography variants="heading3">스트레칭 방법 및 순서</Typography>

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
                size="sm"
              >
                <Typography variants="body3">{list}</Typography>
              </ListTableItem>
            ))}
          </Box>
        </Box>
        {/* 주의 사항 */}
        {data.precautionList.length > 0 && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            gap={3}
            borderRadius={8}
            backgroundColor={colors.f200}
            padding={16}
          >
            <Typography variants="heading3">주의 사항</Typography>

            <Box
              display="flex"
              justifyContent="start"
              alignItems="start"
              flexDirection="column"
            >
              {data.precautionList.map((list, index) => (
                <Typography key={`technique-list-${list}`} variants="body2">
                  <Typography variants="body3"> {"✔️ " + list}</Typography>
                </Typography>
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
            justifyContent="center"
            gap={8}
            height={"auto"}
          >
            <Typography variants="heading3">참고영상</Typography>
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

export default StretchingDetailMobilView;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  padding-bottom: 32px;
  overflow: hidden;
  position: relative;
`;

const NavigatorBar = styled.div`
  position: absolute;
  top: 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
  width: 100%;
`;

const SocialBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: relative;
  gap: 16px;
`;
