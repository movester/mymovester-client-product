import { useMutation } from "@tanstack/react-query";

interface IProps {
  id: number;
}

const useDislikeStretching = (props: IProps) => {
  const { id } = props;
  return useMutation({
    mutationFn: (token: string) =>
      fetch(`/api/like/stretchings/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    mutationKey: ["dislike", id],
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useDislikeStretching;
