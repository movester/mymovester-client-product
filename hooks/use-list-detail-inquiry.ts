import { useQuery } from "@tanstack/react-query";
import {
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../constants/types";

interface IProps {
  listId: string;
}

const useListDeatilInquiry = (props: IProps) => {
  const { listId } = props;

  const { data } = useQuery({
    queryFn: () =>
      fetch(`/api/stretchings/${listId}`).then((res) => res.json()),
    queryKey: ["stretching", "detail", listId],
    enabled: Boolean(listId),
    onError: (error) => {
      console.log(error);
    },
  });

  return data;
};

export default useListDeatilInquiry;
