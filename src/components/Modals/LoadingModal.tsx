import { FC } from "react";
import { Icon } from "@iconify-icon/react";
import { useUserProvider } from "@/contexts/UserContext";

const LoadingModal: FC = () => {
  const { isLoading } = useUserProvider();

  return (
    <div
      className={
        isLoading.value
          ? "fixed z-40 flex h-[var(--vh-100)] w-full items-center justify-center"
          : "hidden"
      }
    >
      <div className="flex fixed top-0 left-0 h-[var(--vh-100)] w-full items-center justify-center backdrop-blur-sm bg-[#00000080]"></div>
      <Icon
        icon="eos-icons:bubble-loading"
        width="70"
        height="70"
        style={{ color: "#FFFFFF" }}
      />
    </div>
  );
};

export default LoadingModal;
