import { useMutation } from "@tanstack/react-query";

interface IProps {
  id: number;
}

const useLikeStretching = (props: IProps) => {
  const { id } = props;
  return useMutation({
    mutationFn: (token: string) =>
      fetch(`/api/v1/like/stretchings/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    mutationKey: ["like", id],
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useLikeStretching;
