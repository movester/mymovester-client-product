import { useQuery } from "@tanstack/react-query";
import {
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../constants/types";

interface IProps {
  page?: number;
  title?: string;
  mainCategory?: StretchingMainCategoryType | null;
  subCategory?: StretchingSubCategoryType | null;
  orderFilter?: StretchingListOrderFilter;
}

const useListInquiry = (props: IProps) => {
  const { page, title, mainCategory, subCategory, orderFilter } = props;

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

  const { data } = useQuery({
    queryFn: () =>
      fetch(
        `/stretchings?page=${page}&title=${title}&${mainCategorySearchQuery}&${subCategorySearchQuery}&orderFilter=${orderFilter}`
      ).then((res) => res.json()),
    queryKey: [
      "stretching",
      "list",
      page,
      title,
      mainCategory,
      subCategory,
      orderFilter,
    ],
  });

  return data;
};

export default useListInquiry;
