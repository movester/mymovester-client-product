import { Dispatch, SetStateAction, useMemo, useState } from "react";
import Box from "../basic/Box";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Typography from "../basic/Typography";
import { colors } from "../../constants/style";

interface IProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
}

const Pagination = (props: IProps) => {
  const { currentPage, setCurrentPage, total } = props;

  const lastPage = useMemo(() => Math.ceil(total / 10), [total]);

  const pageArray = useMemo(() => {
    let array = [];

    for (let i = 0; i < lastPage; i++) {
      array.push(i + 1);
    }

    return array;
  }, [total]);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
      <BiChevronLeft
        onClick={() =>
          setCurrentPage((prev) => (prev - 1 > 0 ? prev - 1 : prev))
        }
      ></BiChevronLeft>
      {pageArray.map((item, idx) => (
        <Box
          key={`pagination-${idx}`}
          backgroundColor={
            item === currentPage ? colors.vividPrimaryColor : colors.f000
          }
          width={20}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={4}
          onClick={() => setCurrentPage(item)}
        >
          <Typography
            color={item === currentPage ? colors.f000 : ""}
            variants="body1"
          >
            {item}
          </Typography>
        </Box>
      ))}
      <BiChevronRight
        onClick={() =>
          setCurrentPage((prev) => (prev + 1 > lastPage ? prev : prev + 1))
        }
      ></BiChevronRight>
    </Box>
  );
};

export default Pagination;
