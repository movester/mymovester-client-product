import { styled } from "styled-components";
import Navigator from "../components/utils/Navigator";
import { Box, Typography } from "movester-design-system";
import ReactCanvasConfetti from "react-canvas-confetti";
import { CSSProperties, useCallback, useEffect, useRef } from "react";

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
  }, []);

  return (
    <PageWrapper>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <Navigator></Navigator>
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
  gap: 72px;
  padding: 72px 32px 32px 32px;
  height: 100%;
  width: 100%;
  position: relative;
`;
