import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/utils/useIsMobile";
import Image from "next/image";
import { Box, Typography } from "movester-design-system";
import { useRef, useState } from "react";
import Modal from "./Modal";

interface IStyledProps {
  ismobile: boolean;
}

const USERID = "123";

const Navigator = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isLoggined, setIsLoggined] = useState(true);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setIsModalOpened(false);
    }
  };
  return (
    <>
      {isModalOpened && (
        <Modal modalRef={modalRef} modalOutsideClick={modalOutSideClick}>
          <MyPageModal>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              padding={8}
            >
              <Typography variants="body3">movcoco님</Typography>
            </Box>
            <MyPageModalListItem
              onClick={() => router.push(`/users/${USERID}`)}
            >
              <Typography variants="body3">마이페이지</Typography>
            </MyPageModalListItem>
            <MyPageModalListItem>
              <Typography variants="body3">로그아웃</Typography>
            </MyPageModalListItem>
          </MyPageModal>
        </Modal>
      )}
      <Wrapper ismobile={isMobile}>
        <Box
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          onClick={() => router.push("/stretchings")}
        >
          <Image
            src={isMobile ? "/favicon.ico" : "/logo.png"}
            width={isMobile ? 16 : 120}
            height={isMobile ? 16 : 32}
            alt={""}
          ></Image>
        </Box>
        <AccountWrapper>
          {isLoggined ? (
            <>
              <Box
                width={30}
                height={30}
                borderRadius={15}
                backgroundColor={colors.g000}
                border={
                  isModalOpened
                    ? `1px solid ${colors.vividPrimaryColor}`
                    : "none"
                }
                onClick={() => setIsModalOpened((prev) => !prev)}
              ></Box>
            </>
          ) : (
            <Box>
              <Typography variants="body3">로그인 | 회원가입</Typography>
            </Box>
          )}
        </AccountWrapper>
      </Wrapper>
    </>
  );
};

export default Navigator;

const Wrapper = styled.div<IStyledProps>`
  background-color: ${colors.f000};
  height: auto;
  padding: ${(props) => (props.ismobile ? "8px 16px" : "16px")};
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 300;
  display: flex;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`;
const AccountWrapper = styled.div`
  /* position: relative; */
  padding-right: 32px;
`;

const MyPageModal = styled.div`
  position: absolute;
  right: 32px;
  top: 48px;
  background-color: ${colors.f000};
  border: 1px solid ${colors.g200};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 180px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
`;

const MyPageModalListItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: 0;
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
