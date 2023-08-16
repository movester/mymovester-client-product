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
    queryFn: () => fetch(`/stretchings/${listId}`).then((res) => res.json()),
    queryKey: ["stretching", "detail", listId],
  });

  return data;
};

export default useListDeatilInquiry;
