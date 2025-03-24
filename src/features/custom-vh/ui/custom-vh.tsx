import { useEffect } from "react";

const CustomVh = (): null => {
  useEffect(() => {
    const handlerResizable = (): void => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    handlerResizable();

    window.addEventListener("resize", handlerResizable);
    window.addEventListener("orientationchange", handlerResizable);

    return () => {
      window.removeEventListener("resize", handlerResizable);
      window.removeEventListener("orientationchange", handlerResizable);
    };
  }, []);

  return null;
};

export default CustomVh;
