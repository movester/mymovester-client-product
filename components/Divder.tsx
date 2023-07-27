import { styled } from "styled-components";

interface IProps {
  color?: string;
}

const Divider = (props: IProps) => {
  const { color = "#C4C4C4" } = props;

  return <Box style={{ backgroundColor: `${color}` }}></Box>;
};

export default Divider;

const Box = styled.div`
  height: 2px;
`;
