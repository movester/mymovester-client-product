import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMobile(Boolean(mobile));
  }, [mobile]);

  return isMobile;
};

export default useIsMobile;
