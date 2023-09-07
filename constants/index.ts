import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "./types";

export interface ITotalComboxType<T> {
  name: string;
  id: T | "total";
}
export interface IComboBoxType<T> {
  name: string;
  id: T;
}

export const STRETCHING_TOTAL_CATEGORY: IComboBoxType<
  StretchingMainCategoryType | StretchingSubCategoryType
>[] = [
  { name: "상체 전체", id: "UPPER_BODY" },
  { name: "목/가슴/어께", id: "NECK" },
  { name: "팔/손/손목", id: "ARM" },
  { name: "등/몸통", id: "BACK" },
  { name: "하체 전체", id: "LOWER_BODY" },
  { name: "고관절/둔근", id: "HIP_JOINT" },
  { name: "종아리/발목/발", id: "CALF" },
  { name: "무릎/허벅지", id: "KNEE" },
];

export const STRETCHING_MAIN_CATEGORY: IComboBoxType<StretchingMainCategoryType>[] =
  [
    { name: "상체", id: "UPPER_BODY" },
    { name: "하체", id: "LOWER_BODY" },
  ];

export const UPPER_BODY_CATEGORY: IComboBoxType<StretchingSubCategoryType>[] = [
  { name: "목/가슴/어께", id: "NECK" },
  { name: "팔/손/손목", id: "ARM" },
  { name: "등/몸통", id: "BACK" },
];

export const LOWER_BODY_CATEGORY: IComboBoxType<StretchingSubCategoryType>[] = [
  { name: "고관절/둔근", id: "HIP_JOINT" },
  { name: "종아리/발목/발", id: "CALF" },
  { name: "무릎/허벅지", id: "KNEE" },
];

export const EFFECT_CATEGORY: IComboBoxType<StretchingEffectType>[] = [
  { name: "통증완화", id: "RELIEF_PAIN" },
  { name: "자세개선", id: "IMPROVE_POSTURE" },
  { name: "근육이완", id: "RELAX_MUSCLE" },
  { name: "혈액순환", id: "BLOOD_CIRCULATION" },
  { name: "거북목 완화", id: "RELIEF_TURTLE_NECK" },
  { name: "라운드숄더 완화", id: "RELIEF_ROUND_SHOULDER" },
];

export const LIST_ORDER_CATEGORY: IComboBoxType<StretchingListOrderFilter>[] = [
  { name: "최신순", id: "RECENT" },
  { name: "인기순", id: "POPULAR" },
];

export const STRETCHING_MAIN_SEARCH_CATEGORY: ITotalComboxType<StretchingMainCategoryType>[] =
  [{ name: "전체", id: "total" }, ...STRETCHING_MAIN_CATEGORY];

export const UPPER_BODY_SEARCH_CATEGORY: ITotalComboxType<StretchingSubCategoryType>[] =
  [{ name: "전체", id: "total" }, ...UPPER_BODY_CATEGORY];

export const LOWER_BODY_SEARCH_CATEGORY: ITotalComboxType<StretchingSubCategoryType>[] =
  [{ name: "전체", id: "total" }, ...LOWER_BODY_CATEGORY];
