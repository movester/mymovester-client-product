import { PropsWithChildren, useEffect, useMemo } from "react";
import { colorsType, typographyType } from "../constants/types";
import { colors } from "../constants/style";

interface IProps {
  variants?: typographyType;
  color?: colorsType;
}

const variantsProperties: {
  [key in typographyType]: { fontSize: number; fontWeight: number };
} = {
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
    <span
      style={{
        fontSize: `${variantsProperties[variants].fontSize}px`,
        fontWeight: `${variantsProperties[variants].fontWeight}`,
        color: `${colors[color]}`,
      }}
    >
      {children}
    </span>
  );
};

export default Typography;
