import { styled } from "styled-components";
import Typography from "../basic/Typography";
import { colors } from "../../constants/style";
import { useRouter } from "next/router";

const Navigator = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Box>
        <Typography variants="heading2">Movester - backoffice</Typography>
      </Box>
      <NavigatorBox onClick={() => router.push("/stretching")}>
        <Typography variants="heading2" color={colors.f000}>
          스트레칭
        </Typography>
      </NavigatorBox>
    </Wrapper>
  );
};

export default Navigator;

const Wrapper = styled.div`
  background-color: ${colors.f000};
  height: auto;
  padding: 16px;
  width: 300px;
`;

const Box = styled.div`
  padding: 32px 0;
`;

const NavigatorBox = styled.div`
  background-color: ${colors.softPrimaryColor};
  width: 100%;
  padding: 8px 8px 8px 16px;
  border-radius: 4px;
  align-items: center;
`;
