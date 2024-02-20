/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/utils/useIsMobile";
import Image from "next/image";
import { Box, Typography } from "movester-design-system";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { IUserProfileType, userProfile } from "../../recoil/user/atom";

import {
  getAccessToken,
  isLoggined,
  removeToken,
} from "../../hooks/utils/manage-token";
import { FaUser } from "react-icons/fa";

interface IStyledProps {
  ismobile: boolean;
}

export type KakaoProfileInfoType = {
  nickName: string;
  profileImageURL: string;
  thumbnailURL: string;
};

const USERID = "123";

const Navigator = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [userProfileState, setUserProfileState] = useRecoilState(userProfile);

  const modalRef = useRef<HTMLDivElement>(null);

  const checkIsLoggined = isLoggined();

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setIsModalOpened(false);
    }
  };

  const handleKakaoLogout = async () => {
    await window.Kakao.Auth.logout().then((res) => {
      removeToken();
      router.replace("/stretchings");
    });
  };

  const getUserInfo = async (token: string) => {
    const res: IUserProfileType = await fetch("/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    setUserProfileState(res);
  };

  useEffect(() => {
    const accessToken = getAccessToken();
    if (isLoggined && !userProfileState) {
      getUserInfo(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggined]);

  // const profileInfo = { name: "김희진", profile_image: "" };
  // ${JSON.parse(
  //   window.localStorage.getItem("_uToken")["access_key"]
  // )}

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
              <Typography variants="body2">
                {userProfileState?.nickName + "님"}
              </Typography>
            </Box>
            <MyPageModalListItem
              onClick={() => router.push(`/users/${USERID}`)}
            >
              <Typography variants="body2">마이페이지</Typography>
            </MyPageModalListItem>
            <MyPageModalListItem onClick={handleKakaoLogout}>
              <Typography variants="body2">로그아웃</Typography>
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
          <img
            src={isMobile ? "/favicon.ico" : "/logo.png"}
            width={isMobile ? 16 : 120}
            height={isMobile ? 16 : 32}
            alt={""}
          ></img>
        </Box>
        <AccountWrapper>
          {checkIsLoggined ? (
            <>
              <ProfileWrapper
                ismobile={isMobile}
                onClick={() => setIsModalOpened((prev) => !prev)}
              >
                {userProfileState?.profileUrl ? (
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={userProfileState.profileUrl}
                    alt={""}
                  ></img>
                ) : (
                  <FaUser></FaUser>
                )}
              </ProfileWrapper>
            </>
          ) : (
            <Box onClick={() => router.push("/login")}>
              <Typography variants="body2">로그인 | 회원가입</Typography>
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
  height: ${(props) => (props.ismobile ? "50px" : "70px")};
  position: sticky;
  top: 0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  top: 60px;
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

const ProfileWrapper = styled.div<IStyledProps>`
  width: ${(props) => (props.ismobile ? "30px" : "40px")};
  height: ${(props) => (props.ismobile ? "30px" : "40px")};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
