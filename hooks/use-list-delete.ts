import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useListDelete = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: string | number) =>
      fetch(`/api/stretchings/${payload}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      router.push("/stretching");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useListDelete;
