import { useMutation } from "@tanstack/react-query";
interface IMutate {
  isTermAgreed: boolean;
  isPrivacyPolicyAgreed: boolean;
  isMarketingAgreed: boolean;
}

interface IProps {
  token: string;
}

const useUserTerms = (props: IProps) => {
  const { token } = props;
  return useMutation({
    mutationFn: ({
      isTermAgreed,
      isPrivacyPolicyAgreed,
      isMarketingAgreed,
    }: IMutate) =>
      fetch(`/api/v2/user/terms`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          isTermAgreed,
          isPrivacyPolicyAgreed,
          isMarketingAgreed,
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
