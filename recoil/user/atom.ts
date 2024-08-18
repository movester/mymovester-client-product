import { atom } from "recoil";
export interface IUserProfileType {
  birthAt?: null | string;
  creatdAt?: string;
  deletedAt?: string;
  email: string;
  gender?: string;
  id: number;
  nickName: string;
  phoneNumber?: string;
  profileUrl: null | string;
  socialType?: "KAKAO";
  socialUid?: string;
  isTermsAgreed: boolean;
}

export const userProfile = atom<IUserProfileType>({
  key: "userProfile",
  default: null,
});

export const LogginedAtom = atom<boolean>({
  key: "logginedCheckAtom",
  default: false,
});
