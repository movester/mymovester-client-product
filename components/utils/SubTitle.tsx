import { PropsWithChildren } from "react";
import Box from "../basic/Box";
import Typography from "../basic/Typography";

interface IProps {
  caption?: string;
  required?: boolean;
}

const SubTitle = (props: PropsWithChildren<IProps>) => {
  const { caption, required = false, children } = props;
  return (
    <Box
      display="flex"
      justifyContent="start"
      alignItems="center"
      gap={4}
      width={"fit-content"}
    >
      <Box display="flex" justifyContent="start" alignItems="center" gap={1}>
        <Typography variants="heading2">{children}</Typography>
        {required && <Typography variants="heading2">＊</Typography>}
      </Box>
      {caption && (
        <Box>
          <Typography variants="caption">{caption}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SubTitle;
