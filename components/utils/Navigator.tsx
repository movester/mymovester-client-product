import { styled } from "styled-components";
import Typography from "../basic/Typography";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";
import Box from "../basic/Box";
import useIsMobile from "../../hooks/utils/useIsMobile";
import Image from "next/image";

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
        <Image
          src={isMobile ? "/favicon.ico" : "/logo.png"}
          width={isMobile ? 16 : 120}
          height={isMobile ? 16 : 32}
          alt={""}
        ></Image>
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
  z-index: 300;
  :hover {
    cursor: pointer;
  }
`;
