import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IFormatedData } from "../pages/stretching/post";

const useStretchingCreate = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: IFormatedData) =>
      fetch("/stretchings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }),
    onSuccess: (res) => {
      router.push("/stretching");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useStretchingCreate;
