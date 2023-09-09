import { colors } from "../../constants/style";
import Typography from "../basic/Typography";
import { styled } from "styled-components";

const DevelopOngoingSign = () => {
  return (
    <Wrapper>
      <Typography variants="body3">{"현재 "}</Typography>
      <Typography color={colors.vividPrimaryColor} variants="heading3">
        개발중
      </Typography>
      <Typography variants="body3">
        {" 인 기능입니다. 빠르게 새로운 기능을 가져오겠습니다 🏃🏻‍♀️"}
      </Typography>
    </Wrapper>
  );
};

export default DevelopOngoingSign;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${colors.f100};
  opacity: 0.95;
  padding: 4px 8px;
  border-radius: 4px;
  top: 40px;
  width: 200px;
  line-height: 16px;
  gap: 2px;
`;
