import { PropsWithChildren, useMemo } from "react";
import { styled } from "styled-components";
import { colors } from "../constants/style";
import { colorsType, sizesType, variantsType } from "../constants/types";

interface IProps {
  variants?: variantsType;
  size: Exclude<sizesType, "xs" | "xl">;
  disabled?: boolean;
}

const variantsColors: {
  [key in variantsType]: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
} = {
  primary: {
    backgroundColor: colors.vividPrimaryColor,
    textColor: colors.primaryWhite,
    borderColor: "transaparent",
  },
  secondary: {
    backgroundColor: colors.primaryWhite,
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
      style={{
        backgroundColor: `${variantsColors[variants].backgroundColor}`,
        color: `${variantsColors[variants].textColor}`,
        border: `2px solid ${variantsColors[variants].borderColor}`,
        height: `${sizes[size].height}px`,
        fontSize: `${sizes[size].fontSize}px`,
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
