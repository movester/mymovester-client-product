import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useStretchingCreate = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: any) =>
      fetch("/stretchings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }),
    onSuccess: (res) => {
      router.push({ pathname: "stretching" });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useStretchingCreate;
