import { useMemo, useState } from "react";
import Box from "../basic/Box";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Typography from "../basic/Typography";

interface IProps {
  currentPage: number;
  setCurrentPage: () => void;
  lastPage: number;
}

const Pagination = (props: IProps) => {
  const { currentPage, setCurrentPage, lastPage } = props;

  const pageArray = useMemo(() => {
    let array = Array(5).fill(null);
    for (let i = 0; i < 5; i++) {
      let diff = i + 1 - (currentPage % 5);
      array[i] = currentPage + diff;
    }

    return array;
  }, [currentPage]);
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
      <BiChevronLeft></BiChevronLeft>
      {pageArray.map((item, idx) => (
        <Typography key={`pagination-${idx}`}>{item}</Typography>
      ))}
      <BiChevronRight></BiChevronRight>
    </Box>
  );
};

export default Pagination;
