import { PropsWithChildren, useMemo } from "react";
import { styled } from "styled-components";
import { colors } from "../constants/style";
import { sizesType, variantsType } from "../constants/types";

interface IProps {
  variants?: variantsType;
  size: Exclude<sizesType, "xs" | "xl">;
  disabled?: boolean;
}

interface IButton {
  $backgroundColor: string;
  $color: string;
  $border: string;
  $height: number;
  $fontSize: number;
}

const variantsColors: {
  [key in variantsType]: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
} = {
  primary: {
    backgroundColor: colors.softPrimaryColor,
    textColor: colors.f000,
    borderColor: "transaparent",
  },
  secondary: {
    backgroundColor: colors.f000,
    textColor: colors.vividPrimaryColor,
    borderColor: colors.vividPrimaryColor,
  },
};

const sizes: {
  [key in Exclude<sizesType, "xs" | "xl">]: {
    height: number;
    fontSize: number;
  };
} = {
  sm: {
    height: 60,
    fontSize: 24,
  },
  md: {
    height: 80,
    fontSize: 24,
  },
  lg: {
    height: 120,
    fontSize: 36,
  },
};

const Button = (props: PropsWithChildren<IProps>) => {
  const { variants = "primary", children, size, disabled = false } = props;

  return (
    <Box
      $backgroundColor={variantsColors[variants].backgroundColor}
      $color={variantsColors[variants].textColor}
      $border={`2px solid ${variantsColors[variants].borderColor}`}
      $height={sizes[size].height}
      $fontSize={sizes[size].fontSize}
    >
      {children ? children : "확인"}
    </Box>
  );
};

export default Button;

const Box = styled.div<IButton>`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  height: ${(props) => `${props.$height}px`};
  font-size: ${(props) => `${props.$fontSize}px`};
  border: ${(props) => `${props.$border}}`};
  &:hover {
    cursor: pointer;
  }
`;
