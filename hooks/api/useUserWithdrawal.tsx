import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { removeToken } from "../utils/manage-token";

const useUserWithdrawal = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (token: string) =>
      fetch("/api/v1/user", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    mutationKey: ["user", "delete"],
    onSuccess: () => {
      removeToken();
      router.push("/stretchings");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useUserWithdrawal;
