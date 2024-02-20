export const setAccessToken = (token): void => {
  window.localStorage.setItem("access_token", token);
};

export const setRefreshToken = (token): void => {
  window.localStorage.setItem("refresh_token", token);
};

export const getAccessToken = (): string | undefined => {
  return window.localStorage.getItem("access_token");
};

export const getRefreshToken = (): string | undefined => {
  return window.localStorage.getItem("refresh_token");
};

export const removeToken = () => {
  window.localStorage.removeItem("refresh_token");
  window.localStorage.removeItem("access_token");
};

export const isLoggined = (): boolean => {
  if (typeof window !== "undefined") {
    // window 객체를 사용하는 코드
    return (
      Boolean(window.localStorage.getItem("access_token")) &&
      Boolean(window.localStorage.getItem("refresh_token"))
    );
  } else {
    return false;
  }
};
