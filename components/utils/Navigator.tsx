import { styled } from "styled-components";
import Typography from "../basic/Typography";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";

const Navigator = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Box>
        <Typography>Movester - backoffice</Typography>
      </Box>
      <NavigatorBox onClick={() => router.push("/stretching")}>
        <Typography variants="body2" color={colors.f000}>
          스트레칭
        </Typography>
      </NavigatorBox>
    </Wrapper>
  );
};

export default Navigator;

const Wrapper = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  background-color: ${colors.f000};
  height: 100vh;
  padding: 16px;
  width: 300px;
  :hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  padding: 32px 0;
`;

const NavigatorBox = styled.div`
  background-color: ${colors.softPrimaryColor};
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;
