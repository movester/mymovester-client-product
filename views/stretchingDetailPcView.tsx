/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { MemorizedNavigator } from "../components/utils/Navigator";
import { StretchingDetailQueryItemType } from "../constants/types";
import { colors } from "../constants/style";
import ListTableItem from "../components/utils/ListTableItem";
import ShadowBox from "../components/utils/ShadowBox";
import {
  STRETCHING_EFFECT_TEXT,
  STRETCHING_SUB_CATEGORY_TEXT,
} from "../constants/text";
import { Box, Chip, Divider, Typography } from "movester-design-system";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import RoutineListModal from "../components/utils/Routine/RoutineListModal";

interface IProps {
  data?: StretchingDetailQueryItemType;
  isLogin: boolean;
  handleLikeButton: () => void;
  isLiked: boolean;
}

const StretchingDetailPcView = (props: IProps) => {
  const { data, isLogin, handleLikeButton, isLiked } = props;
  const router = useRouter();
  const [savedRoutine, setSavedRoutine] = useState<boolean>(false);
  const [isRoutineListModalOpened, setIsRoutineListModalOpened] =
    useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setIsRoutineListModalOpened(false);
    }
  };

  const handleOnClickShareURL = () => {
    navigator.clipboard.writeText(window.location.href);
    window.alert("링크가 복사되었습니다!");
  };

  const handleOnClickSaveButton = () => {
    if (!savedRoutine) {
      setIsRoutineListModalOpened(true);
    }
  };

  return (
    <PageWrapper>
      <MemorizedNavigator
        isLoggined={isLogin}
        pageID="STRETCHINGS"
      ></MemorizedNavigator>
      <ContentWrapper>
        {isRoutineListModalOpened && (
          <RoutineListModal
            setModalClose={setIsRoutineListModalOpened}
            modalOutsideClick={modalOutSideClick}
            modalRef={modalRef}
            title="루틴생성"
          >
            <Box display="flex" flexDirection="column" gap={4}>
              <Typography variants="body2" color={colors.g300}>
                루틴 리스트
              </Typography>
              <Box display="flex" flexDirection="column" gap={8}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="start"
                  gap={16}
                >
                  <img src="/mainpage1.png" width={80} height={80}></img>
                  <Typography variants="heading3">자기전 루틴</Typography>
                </Box>
              </Box>
            </Box>
          </RoutineListModal>
        )}
        <SocialBoxWrapper>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <IconBox onClick={handleOnClickSaveButton}>
              {savedRoutine ? (
                <IoBookmark size={28}></IoBookmark>
              ) : (
                <IoBookmarkOutline size={28}></IoBookmarkOutline>
              )}
            </IconBox>
            <Typography variants="body2"></Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <IconBox onClick={handleLikeButton}>
              {isLiked ? (
                <AiFillHeart size={28} color={colors.r000} />
              ) : (
                <AiOutlineHeart size={28} />
              )}
            </IconBox>
            <Typography variants="body2"></Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <IconBox onClick={handleOnClickShareURL}>
              <AiOutlineShareAlt size={28}></AiOutlineShareAlt>
            </IconBox>
            <Typography variants="body2"></Typography>
          </Box>
        </SocialBoxWrapper>
        <Box display="flex" flexDirection="column" gap={16}>
          <Box padding={"72px 0px"}>
            <Typography variants="title1">{data.title}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap={8}
          >
            <Chip>{STRETCHING_SUB_CATEGORY_TEXT[data.subCategory]}</Chip>
            {data.effectList &&
              data.effectList.map((item, idx) => (
                <Chip variants="secondary" key={`detail-effect-${item}-${idx}`}>
                  {STRETCHING_EFFECT_TEXT[item]}
                </Chip>
              ))}
          </Box>
          <Divider></Divider>
        </Box>

        {/* 이미지 */}
        <Box
          display="grid"
          gridTemplateColumns={`repeat(${
            data.imageList?.length > 1 ? 2 : 1
          },350px)`}
          gap={8}
          justifyContent="center"
          alignItems="center"
          backgroundColor={data.imageList?.length > 1 ? "none" : colors.f300}
        >
          {data.imageList?.map((imgLink, index) => (
            <Box
              backgroundColor={colors.f300}
              key={`img-detail-${data.id}-${index}`}
            >
              <img src={imgLink}></img>
            </Box>
          ))}
        </Box>
        {/* 권장 횟수 */}
        <ShadowBox>
          <Box
            backgroundColor={colors.f200}
            padding={32}
            borderRadius={8}
            display="flex"
            flexDirection="column"
          >
            <Typography variants="heading2">권장 횟수</Typography>
            <Typography variants="heading2">
              {`${data.collect}회 X ${data.set}세트`}
            </Typography>
          </Box>
        </ShadowBox>
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
            {data.techniqueList?.map((list, index) => (
              <ListTableItem
                key={`technique-list-${list}-${index}`}
                order={index + 1}
              >
                <Typography variants="body1">{list}</Typography>
              </ListTableItem>
            ))}
          </Box>
        </Box>

        {/* 주의 사항 */}
        {data.precautionList?.length > 0 && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
            borderRadius={8}
            gap={16}
            backgroundColor={colors.f200}
            padding={32}
          >
            <Typography variants="heading2">주의 사항</Typography>

            <Box
              display="flex"
              justifyContent="start"
              alignItems="start"
              flexDirection="column"
              gap={4}
            >
              {data.precautionList?.map((list, index) => (
                <Typography variants="body1" key={`technique-list-${list}`}>
                  {"✔️ " + list}
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
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StretchingDetailPcView;

const ContentWrapper = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 72px 32px 32px 32px;
  height: 100%;
  width: 100%;
  position: relative;
`;

const SocialBoxWrapper = styled.div`
  position: fixed;
  right: calc((100% - 768px - 120px) / 2);
  top: 360px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-x: scroll;
  padding-bottom: 64px;
`;

const IconBox = styled.div`
  background-color: ${colors.f000};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
`;
