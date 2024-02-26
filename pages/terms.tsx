import { styled } from "styled-components";
import { MemorizedNavigator } from "../components/utils/Navigator";
import {
  Box,
  Button,
  CheckBox,
  Divider,
  Typography,
} from "movester-design-system";
import ReactCanvasConfetti from "react-canvas-confetti";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MARKETING_POLICY,
  PRIVACY_POLICY,
  USAGE_POLICY,
} from "../constants/links";
import { colors } from "../constants/style";
import { useRouter } from "next/router";

const canvasStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const TermsPage = () => {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [usage_policy, setUsage_policy] = useState<boolean>(false);
  const [privacy_policy, setPrivacy_policy] = useState<boolean>(false);
  const [marketing_policy, setMarketing_policy] = useState<boolean>(false);

  const handleOnClickSelectAllButton = () => {
    if (selectAll) {
      setUsage_policy(false);
      setPrivacy_policy(false);
      setMarketing_policy(false);
    } else {
      setUsage_policy(true);
      setPrivacy_policy(true);
      setMarketing_policy(true);
    }
  };

  useEffect(() => {
    if (usage_policy && privacy_policy && marketing_policy) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [marketing_policy, privacy_policy, usage_policy]);

  return (
    <PageWrapper>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <MemorizedNavigator></MemorizedNavigator>
      <ContentWrapper>
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variants={"heading1"}>김희진님</Typography>
          <Typography variants={"heading1"}>
            뭅스터가 되신것을 환영합니다!
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={"/mus_cheering.png"}
            width={300}
            height={300}
            alt={""}
          ></Image>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variants={"heading2"}>
            시작하기 전에 서비스에 대한 약관 동의가 필요해요
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={16}
          alignItems="start"
          justifyContent="center"
          backgroundColor={colors.g200}
          padding={"16px 32px"}
          borderRadius={8}
        >
          <Box>
            <Typography variants="body2">[서비스 이용 약관]</Typography>
            <CheckBox
              isChecked={selectAll}
              setIsChecked={handleOnClickSelectAllButton}
            >
              전체 동의합니다.
            </CheckBox>
          </Box>
          <Box width={"100%"} backgroundColor={colors.g300} height={1}></Box>
          <Box>
            <CheckBox
              isChecked={usage_policy}
              setIsChecked={() => setUsage_policy((prev) => !prev)}
            >
              (필수) <Link href={USAGE_POLICY}>이용약관 동의</Link>
            </CheckBox>
            <CheckBox
              isChecked={privacy_policy}
              setIsChecked={() => setPrivacy_policy((prev) => !prev)}
            >
              (필수) <Link href={PRIVACY_POLICY}>개인정보 처리방침 동의</Link>
            </CheckBox>
            <CheckBox
              isChecked={marketing_policy}
              setIsChecked={() => setMarketing_policy((prev) => !prev)}
            >
              (선택) <Link href={MARKETING_POLICY}>마케팅 수신 동의</Link>
            </CheckBox>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button size="sm" width={300}>
            동의하고 시작하기
          </Button>
        </Box>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TermsPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 72px;
  padding: 72px 32px 32px 32px;
  height: 100%;
  width: 100%;
  position: relative;
`;
