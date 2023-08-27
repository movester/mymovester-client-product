import { useMutation } from "@tanstack/react-query";

const useImageUpload = () => {
  return useMutation({
    mutationFn: (payload: FormData) =>
      fetch("/api/uploads", {
        method: "POST",
        headers: {
          Accept: "*/*",
        },
        body: payload,
      })
        .then((res) => res.json())
        .catch((error) => error),
    onError: (error) => {
      console.log(error);
    },
  });
};
export default useImageUpload;
