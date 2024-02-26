/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";
import useIsMobile from "../../hooks/utils/useIsMobile";

import { Box, Typography } from "movester-design-system";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Modal from "./Modal";
import { useRecoilState } from "recoil";
import { userProfile } from "../../recoil/user/atom";

import {
  getAccessToken,
  isAccessTokenExpired,
  removeToken,
} from "../../hooks/utils/manage-token";
import { FaUser } from "react-icons/fa";
import useUserInfoInquiry from "../../hooks/api/useUserInfoInquiry";
import React from "react";
import { NextPageContext } from "next";

interface IProps {
  isLoggined: boolean;
}

interface IStyledProps {
  ismobile: boolean;
}

export type KakaoProfileInfoType = {
  nickName: string;
  profileImageURL: string;
  thumbnailURL: string;
};

const Navigator = (props: IProps) => {
  const { isLoggined } = props;

  const [userProfileState, setUserProfileState] = useRecoilState(userProfile);

  const router = useRouter();
  const ismobile = useIsMobile();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [USERID, setUSERID] = useState<number | string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setIsModalOpened(false);
    }
  };

  const handleKakaoLogout = () => {
    removeToken();
    router.replace("/stretchings");
  };

  const { data } = useUserInfoInquiry({ token: accessToken });

  useEffect(() => {
    if (isLoggined && !userProfileState) {
      const accessToken = getAccessToken();
      setAccessToken(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggined, userProfileState]);

  useEffect(() => {
    setUserProfileState(data);
  }, [data, setUserProfileState]);

  useEffect(() => {
    if (isLoggined && userProfileState) {
      setUSERID(userProfileState.id);
    }
  }, [isLoggined, userProfileState]);

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
      <Wrapper ismobile={ismobile}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          height={"100%"}
          onClick={() => router.push("/stretchings")}
        >
          <img
            src={ismobile ? "/favicon.ico" : "/logo.png"}
            width={ismobile ? 16 : 120}
            height={ismobile ? 16 : 32}
            alt={""}
          ></img>
        </Box>
        <AccountWrapper>
          {isLoggined ? (
            <>
              <ProfileWrapper
                ismobile={ismobile}
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

export const MemorizedNavigator = React.memo(Navigator);

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
  /* padding-right: 32px; */
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
  background-color: ${colors.g200};
`;
