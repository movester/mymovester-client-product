import { useQuery } from "@tanstack/react-query";
import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";

interface IProps {
  page: number;
  size: number;
  mainCategory?: StretchingMainCategoryType;
  subCategory?: StretchingSubCategoryType;
  effect?: StretchingEffectType;
  orderFilter?: StretchingListOrderFilter;
}

const useStretchingInquiry = (props: IProps) => {
  const { page, size, mainCategory, subCategory, orderFilter, effect } = props;

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

  const { data } = useQuery({
    queryFn: () =>
      fetch(
        `/api/stretchings?page=${page}&size=${size}&${mainCategorySearchQuery}&${subCategorySearchQuery}&${effectSearchQuery}&orderFilter=${orderFilter}`
      )
        .then((res) => res.json())
        .catch((error) => error),
    queryKey: [
      "stretching",
      "list",
      page,
      mainCategory,
      subCategory,
      effect,
      orderFilter,
    ],
    onError: (error) => {
      console.log(error);
    },
  });

  return data;
};

export default useStretchingInquiry;
