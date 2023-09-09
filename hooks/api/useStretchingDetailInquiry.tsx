import { useQuery } from "@tanstack/react-query";

interface IProps {
  id: string;
}

const useStretchingDetailInquiry = (props: IProps) => {
  const { id } = props;

  const res = useQuery({
    queryFn: () =>
      fetch(`/api/stretchings/${id}`)
        .then((res) => res.json())
        .catch((error) => error),
    queryKey: ["stretching", "detail", id],
    onError: (error) => {
      console.log(error);
    },
    enabled: Boolean(id),
  });

  return res;
};

export default useStretchingDetailInquiry;
