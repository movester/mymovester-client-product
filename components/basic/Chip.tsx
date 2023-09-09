import { PropsWithChildren } from "react";
import Box from "./Box";
import { colors } from "../../constants/style";
import Typography from "./Typography";

interface IProps {
  variants?: "primary" | "secondary";
}

const variantsProps = {
  primary: {
    backgroundColor: colors.softPrimaryColor,
    color: colors.f000,
    border: "none",
  },
  secondary: {
    backgroundColor: colors.f000,
    color: colors.vividPrimaryColor,
    border: `1px solid ${colors.vividPrimaryColor}`,
  },
};

const Chip = (props: PropsWithChildren<IProps>) => {
  const { children, variants = "primary" } = props;
  return (
    <Box
      backgroundColor={variantsProps[variants].backgroundColor}
      border={variantsProps[variants].border}
      width={"fit-content"}
      height={30}
      borderRadius={15}
      padding={"0px 16px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSahdow="4px 4px 4px rgba(0,0,0,0.1)"
    >
      <Typography variants="heading3" color={variantsProps[variants].color}>
        {children}
      </Typography>
    </Box>
  );
};

export default Chip;
