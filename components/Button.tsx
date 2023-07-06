import { PropsWithChildren, useMemo } from "react";
import { styled } from "styled-components";
import {
  primaryWhite,
  softPrimaryColor,
  vividPrimaryColor,
} from "../constants/style";

interface IProps {
  variants?: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button = (props: PropsWithChildren<IProps>) => {
  const { variants = "primary", children, size, disabled = false } = props;

  const backgroundColor = useMemo(
    () => (variants === "primary" ? `${softPrimaryColor}` : `${primaryWhite}`),
    [variants]
  );

  const textColor = useMemo(
    () => (variants === "primary" ? `${primaryWhite}` : `${vividPrimaryColor}`),
    [variants]
  );

  const borderColor = useMemo(
    () => (variants === "primary" ? "transparent" : `${vividPrimaryColor}`),
    [variants]
  );

  const buttonHeight = useMemo(() => {
    let height;
    switch (size) {
      case "sm":
        height = 60;
        break;
      case "md":
        height = 80;
        break;
      case "lg":
        height = 120;
        break;
    }
    return height;
  }, [size]);

  const fontSize = useMemo(() => {
    let fontPixel;
    switch (size) {
      case "sm":
        fontPixel = 24;
        break;
      case "md":
        fontPixel = 24;
        break;
      case "lg":
        fontPixel = 36;
        break;
    }
    return fontPixel;
  }, [size]);

  return (
    <Box
      style={{
        backgroundColor: `${backgroundColor}`,
        color: `${textColor}`,
        border: `2px solid ${borderColor}`,
        height: `${buttonHeight}px`,
        fontSize: `${fontSize}px`,
      }}
    >
      {children ? children : "확인"}
    </Box>
  );
};

export default Button;

const Box = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  border-radius: 16px;
  align-items: center;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;
