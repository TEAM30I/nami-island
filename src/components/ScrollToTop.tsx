import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 브라우저 기본 스크롤 복원을 비활성화합니다.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // 경로가 변경될 때마다 최상단으로 스크롤 이동합니다.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
