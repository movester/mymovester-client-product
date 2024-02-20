import { PropsWithChildren, useState } from "react";
import { colors } from "../../constants/style";

import { AiFillCheckCircle } from "react-icons/ai";
import { Box, Typography } from "movester-design-system";

interface IProps {
  order: number;
  deleteMode?: boolean;
  onClickDelete?: (order) => void;
}
const InputTableItem = (props: PropsWithChildren<IProps>) => {
  const { order, children, deleteMode = false, onClickDelete } = props;

  const [isclicked, setIsclicked] = useState<boolean>(false);
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
        onClick={() => {
          if (deleteMode) {
            setIsclicked((prev) => !prev);
            onClickDelete(order);
          }
        }}
        width={44}
      >
        {deleteMode ? (
          <AiFillCheckCircle
            color={isclicked ? colors.r000 : colors.g000}
          ></AiFillCheckCircle>
        ) : (
          <Typography variants="body1">{order}</Typography>
        )}
      </Box>
      <Box
        backgroundColor={colors.f000}
        width={"100%"}
        height={"auto"}
        padding={0}
      >
        {children}
      </Box>
    </Box>
  );
};

export default InputTableItem;
