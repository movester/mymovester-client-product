import { useMutation } from "@tanstack/react-query";
import { IFormatedData } from "../pages/stretching/post";

interface IPayload {
  pageId: number;
  formattedData: IFormatedData;
}

const useListModify = () => {
  return useMutation({
    mutationFn: (payload: IPayload) =>
      fetch(`/api/stretchings/${payload.pageId}`, {
        method: "PUT",
        body: JSON.stringify(payload.formattedData),
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });
};

export default useListModify;
