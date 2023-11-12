import React from "react";
import { PropsWithChildren } from "react";
import { colors } from "../../constants/style";
import { Box, Typography } from "movester-design-system";

interface IProps {
  order: number;
  size?: "sm" | "md";
}

const sizeProps = {
  sm: {
    height: 32,
    width: 30,
    padding: 8,
  },
  md: {
    height: 48,
    width: 44,
    padding: 16,
  },
};

const ListTableItem = (props: PropsWithChildren<IProps>) => {
  const { order, size = "md", children } = props;
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      backgroundColor={colors.g000}
      width={"100%"}
      alignItems="center"
      height={sizeProps[size].height}
    >
      <Box
        backgroundColor={colors.f000}
        height={"100%"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={sizeProps[size].width}
      >
        <Typography variants={size === "md" ? "body1" : "body2"}>
          {order}
        </Typography>
      </Box>
      <Box
        backgroundColor={colors.f000}
        width={"100%"}
        height={"100%"}
        alignItems="center"
        display="flex"
        padding={sizeProps[size].padding}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ListTableItem;
