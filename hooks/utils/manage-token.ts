import Cookies from "js-cookie";
import { JwtPayload, jwtDecode } from "jwt-decode";

export const setAccessToken = (token): void => {
  Cookies.set("access_token", token, {
    secure: true,
  });
};

export const setRefreshToken = (token): void => {
  Cookies.set("refresh_token", token, {
    secure: true,
  });
};

export const getAccessToken = (): string | undefined => {
  return Cookies.get("access_token");
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get("refresh_token");
};

export const removeToken = () => {
  Cookies.remove("refresh_token", {
    secure: true,
  });
  Cookies.remove("access_token", {
    secure: true,
  });
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = jwtDecode<JwtPayload>(token);
  let isExpired = false;
  if (decoded.exp) {
    const buffer = 60_000;
    // eslint-disable-next-line no-magic-numbers
    isExpired = decoded.exp < (Date.now() + buffer) / 1000;
  }
  return isExpired;
};

export const isAccessTokenExpired = (): boolean => {
  const accessToken = getAccessToken();

  return !accessToken || isTokenExpired(accessToken);
};
