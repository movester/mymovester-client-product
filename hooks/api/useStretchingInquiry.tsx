import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";
import { useState } from "react";

interface IProps {
  // page: number;
  size: number;
  mainCategory?: StretchingMainCategoryType;
  subCategory?: StretchingSubCategoryType;
  effect?: StretchingEffectType;
  orderFilter?: StretchingListOrderFilter;
}

const getFetchItems = async (
  pageParam,
  size,
  mainCategory,
  subCategory,
  effect,
  orderFilter
) => {
  const formatSearchQuery = (catergory: string, keyword) => {
    if (keyword) {
      return `${catergory}=${keyword}`;
    }
    return `${catergory}`;
  };

  const mainCategorySearchQuery = formatSearchQuery(
    "mainCategory",
    mainCategory
  );

  const subCategorySearchQuery = formatSearchQuery("subCategory", subCategory);

  const effectSearchQuery = formatSearchQuery("effect", effect);
  const res = await fetch(
    `/api/stretchings?page=${pageParam}&size=${size}&${mainCategorySearchQuery}&${subCategorySearchQuery}&${effectSearchQuery}&orderFilter=${orderFilter}`
  )
    .then((res) => res.json())
    .catch((error) => error);
  return {
    data: [...res.stretchingList],
    total: res.total,
    pagePrams: pageParam,
  };
};

const useStretchingInquiry = (props: IProps) => {
  const { size, mainCategory, subCategory, orderFilter, effect } = props;

  const res = useInfiniteQuery({
    queryKey: [
      "stretching",
      "list",
      size,
      mainCategory,
      subCategory,
      effect,
      orderFilter,
    ],
    queryFn: ({ pageParam = 1 }) =>
      getFetchItems(
        pageParam,
        size,
        mainCategory,
        subCategory,
        effect,
        orderFilter
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage === undefined) return false;
      if (lastPage.pagePrams + 1 <= Math.ceil(lastPage.total / 10)) {
        return lastPage.pagePrams + 1;
      }
      return false;
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return res;
};

export default useStretchingInquiry;
