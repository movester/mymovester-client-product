import { styled } from "styled-components";
import Button from "../components/Button";
import Typography from "../components/Typography";

const mainPage = () => {
  return (
    <div>
      <Typography variants="heading1">heading1</Typography>
      <Typography variants="heading2">heading2</Typography>
      <Typography variants="body1">body1</Typography>
      <Typography variants="body2">body2</Typography>
      <Button size="sm" variants="secondary">
        dddd
      </Button>
    </div>
  );
};

export default mainPage;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
