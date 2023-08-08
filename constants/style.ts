import { colorsType } from "./types";

type IColors = {
  [key in colorsType]: string;
};

export const colors: IColors = {
  softPrimaryColor: "#6D66AA",
  vividPrimaryColor: "#2A1598",
  f100: "#fafafa",
  f000: "#ffffff",
  g200: "#e5e5e5",
  g100: "#615B5B",
  g000: "#C4C4C4",
};
