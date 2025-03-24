import { Outlet } from "react-router-dom";
import cn from "classnames";

import Header from "./Header";
import DisConnectModal from "../Modals/DisConnectModal";
import LoadingModal from "../Modals/LoadingModal";

const Layout = () => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center",
        "w-full h-[var(--vh-100)] min-h-[var(--vh-100)]",
        "pt-20",
        "text-dark bg-[#2FD3BA]",
        "relative"
      )}
    >
      <Header />
      <div
        className={cn(
          "flex-grow",
          "w-full h-[calc(var(--vh-100)-5rem)]",
          "bg-white",
          "rounded-t-3xl",
          "relative"
        )}
      >
        <Outlet />
      </div>
      <DisConnectModal />
      <LoadingModal />
    </div>
  );
};

export default Layout;
