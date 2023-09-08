import { styled } from "styled-components";
import Typography from "../basic/Typography";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";
import Box from "../basic/Box";
import useIsMobile from "../../hooks/utils/useIsMobile";

interface IStyledProps {
  ismobile: boolean;
}

const Navigator = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <Wrapper ismobile={isMobile}>
      <Box
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        onClick={() => router.push("/stretchings")}
      >
        <Typography variants="heading2" color={colors.vividPrimaryColor}>
          {isMobile ? "M" : "MOVESTER"}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Navigator;

const Wrapper = styled.div<IStyledProps>`
  background-color: ${colors.f000};
  height: auto;
  padding: ${(props) => (props.ismobile ? "8px 16px" : "16px")};
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
`;
