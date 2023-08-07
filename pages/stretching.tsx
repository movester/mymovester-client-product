import { styled } from "styled-components";
import Navigator from "../components/utils/Navigator";
import { colors } from "../constants/style";

const StrechingPage = () => {
  return (
    <PageWrapper>
      <Navigator></Navigator>
    </PageWrapper>
  );
};

export default StrechingPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f100};
`;
