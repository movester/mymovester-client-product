import { useMutation } from "@tanstack/react-query";

interface IProps {
  isTermAgreed: boolean;
  isPrivacyPolicyAgreed: boolean;
  isMarketingAgreed: boolean;
}

const useUserTerms = (props: IProps) => {
  const { isMarketingAgreed, isPrivacyPolicyAgreed, isTermAgreed } = props;
  return useMutation({
    mutationFn: (token: string) =>
      fetch(`/api/v2/user/terms`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          isMarketingAgreed,
          isPrivacyPolicyAgreed,
          isTermAgreed,
        }),
      }),
    mutationKey: ["user", "terms"],
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useUserTerms;
