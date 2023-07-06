import { styled } from "styled-components";
import Button from "../components/Button";

const mainPage = () => {
  return (
    <div>
      <GridBox>
        <Button variants="primary" size="lg">
          버튼
        </Button>
        <Button variants="secondary" size="lg">
          버튼
        </Button>

        <Button variants="primary" size="md">
          버튼
        </Button>
        <Button variants="secondary" size="md">
          버튼
        </Button>

        <Button variants="primary" size="sm">
          버튼
        </Button>
        <Button variants="secondary" size="sm">
          버튼
        </Button>
      </GridBox>
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
