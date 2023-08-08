import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { PropsWithChildren } from "react";

interface IProps {}

const ShadowBox = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  return <Box>{children}</Box>;
};

export default ShadowBox;

const Box = styled.div`
  background-color: ${colors.f000};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: fit-content;
  border-radius: 8px;
`;
