const useLoggined = (): boolean => {
  return JSON.parse(window.localStorage.getItem("_uToken")) ? true : false;
};

export default useLoggined;
