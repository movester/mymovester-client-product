import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { IUserProfileType } from "../../recoil/user/atom";

interface IProps {
  token: string;
}

const useUserInfoInquiry = (props: IProps) => {
  const { token } = props;

  const res: UseQueryResult<IUserProfileType> = useQuery({
    queryFn: () =>
      fetch("/api/v1/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .catch((error) => error),
    queryKey: ["user", "info", token],
    onError: (error) => {
      console.log(error);
    },
    enabled: Boolean(token),
    refetchOnWindowFocus: false,
  });

  return res;
};

export default useUserInfoInquiry;
