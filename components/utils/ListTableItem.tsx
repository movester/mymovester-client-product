import { PropsWithChildren } from "react";
import { colors } from "../../constants/style";
import Box from "../basic/Box";
import Typography from "../basic/Typography";

interface IProps {
  order: number;
}

const ListTableItem = (props: PropsWithChildren<IProps>) => {
  const { order, children } = props;
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      backgroundColor={colors.g000}
      width={"100%"}
      alignItems="center"
      height={48}
    >
      <Box
        backgroundColor={colors.f000}
        height={"100%"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={44}
      >
        <Typography variants="body1">{order}</Typography>
      </Box>
      <Box
        backgroundColor={colors.f000}
        width={"100%"}
        height={"100%"}
        alignItems="center"
        display="flex"
        padding={16}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ListTableItem;
