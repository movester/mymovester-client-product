import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { StretchingDetailQueryItemType } from "../../constants/types";

interface IProps {
  id: string;
  token: string;
}

const useStretchingDetailInquiry = (props: IProps) => {
  const { id, token } = props;

  const res: UseQueryResult<StretchingDetailQueryItemType> = useQuery({
    queryFn: () =>
      fetch(`/api/stretchings/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token ? token : ""}`,
        },
      })
        .then((res) => res.json())
        .catch((error) => error),
    queryKey: ["stretching", "detail", id],
    onError: (error) => {
      console.log(error);
    },
    enabled: Boolean(id),
    refetchOnWindowFocus: false,
  });

  return res;
};

export default useStretchingDetailInquiry;
