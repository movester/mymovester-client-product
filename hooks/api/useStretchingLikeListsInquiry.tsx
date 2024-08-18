import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { IUserProfileType } from "../../recoil/user/atom";
import {
  EFFECT_CATEGORY,
  STRETCHING_MAIN_CATEGORY,
  STRETCHING_TOTAL_CATEGORY,
} from "../../constants";
import {
  StretchingEffectType,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";

interface IStretchingListType {
  id: number;
  title: string;
  mainCategory: StretchingMainCategoryType;
  subCategory: StretchingSubCategoryType;
  createdAt: string;
  effect: StretchingEffectType;
  imageUrl: string;
  isLike: boolean;
}

interface IListListType {
  total: number;
  stretchingList: IStretchingListType[];
}

interface IProps {
  token: string;
}

const useStretchingLikeListsInquiry = (props: IProps) => {
  const { token } = props;

  const res: UseQueryResult<IListListType> = useQuery({
    queryFn: () =>
      fetch("/api/v1/like/stretchings", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .catch((error) => error),
    queryKey: ["like", "list", token],
    onError: (error) => {
      console.log(error);
    },
    enabled: Boolean(token),
    refetchOnWindowFocus: false,
  });

  return res;
};

export default useStretchingLikeListsInquiry;
