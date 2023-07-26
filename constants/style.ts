import { colorsType } from "./types";

type IColors = {
  [key in colorsType]: string;
};

export const colors: IColors = {
  softPrimaryColor: "#6D66AA",
  vividPrimaryColor: "#2A1598",
  primaryWhite: "#ffffff",
};
