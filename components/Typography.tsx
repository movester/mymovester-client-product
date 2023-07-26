import { PropsWithChildren, useEffect, useMemo } from "react";
import { colorsType } from "../constants/types";
import { colors } from "../constants/style";

interface IProps {
  variants?: "heading1" | "heading2" | "body1" | "body2" | "caption";
  color?: colorsType;
}

const variantsProperties = {
  heading1: {
    fontSize: 36,
    fontWeight: 800,
  },
  heading2: {
    fontSize: 24,
    fontWeight: 800,
  },
  body1: {
    fontSize: 24,
    fontWeight: 500,
  },
  body2: {
    fontSize: 16,
    fontWeight: 500,
  },
  caption: {
    fontSize: 8,
    fontWeight: 500,
  },
};

const Typography = (props: PropsWithChildren<IProps>) => {
  const { variants = "body2", color, children } = props;

  return (
    <div
      style={{
        fontSize: `${variantsProperties[variants].fontSize}px`,
        fontWeight: `${variantsProperties[variants].fontWeight}`,
        color: `${colors[color]}`,
      }}
    >
      {children}
    </div>
  );
};

export default Typography;
