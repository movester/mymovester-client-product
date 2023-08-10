import { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface IProps {
  flexDirection?: "column" | "row";
  gap?: number;
  justifyContent?: "center" | "start" | "end" | "space-between";
  alignItems?: "center" | "start" | "end";
  padding?: number;
  width?: number | string;
  height?: number | string;
  display?: "flex" | "block" | "inline" | "grid";
  overflow?: "scroll" | "hidden";
}

interface IBox {
  $flexDirection?: "column" | "row";
  $gap?: number;
  $justifyContent?: "center" | "start" | "end" | "space-between";
  $alignItems?: "center" | "start" | "end";
  $padding?: number;
  $width?: number | string;
  $height?: number | string;
  $display?: "flex" | "block" | "inline" | "grid";
  $overflow?: "scroll" | "hidden";
}

const Box = (props: PropsWithChildren<IProps>) => {
  const {
    children,
    flexDirection,
    gap,
    justifyContent,
    alignItems,
    padding,
    width,
    height,
    display,
    overflow,
  } = props;
  return (
    <BoxWrapper
      $flexDirection={flexDirection}
      $gap={gap}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $padding={padding}
      $width={width}
      $height={height}
      $display={display}
      $overflow={overflow}
    >
      {children}
    </BoxWrapper>
  );
};

export default Box;

const BoxWrapper = styled.div<IBox>`
  width: ${({ $width }) => (Number.isNaN($width) ? $width : `${$width}px `)};
  height: ${({ $height }) =>
    Number.isNaN($height) ? $height : `${$height}px `};
  display: ${({ $display }) => $display};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  padding: ${({ $padding }) => `${$padding}px`};
  gap: ${({ $gap }) => `${$gap}px`};
  overflow: ${({ $overflow }) => $overflow};
`;
