import { useMutation } from "@tanstack/react-query";

const useImageUpload = () => {
  return useMutation({
    mutationFn: (payload: FormData) =>
      fetch("/uploads", {
        method: "POST",
        headers: {
          Accept: "*/*",
        },
        body: payload,
      }).then((res) => res.json()),
  });
};
export default useImageUpload;
