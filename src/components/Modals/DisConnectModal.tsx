import { Icon } from "@iconify-icon/react";
import { useWallet } from "@solana/wallet-adapter-react";
import cn from "classnames";

import { useUserProvider } from "@/contexts/UserContext";
import { isPWA } from "@/utils/is-pwa";

const DisConnectModal = () => {
  const { isDisconnected } = useUserProvider();

  const { disconnect } = useWallet();

  const handleDisconnect = () => {
    disconnect();
    isDisconnected.setFalse();
  };

  const handleReset = () => {
    isDisconnected.setFalse();
  };

  return (
    <div
      className={`fixed inset-0 z-30 flex items-end justify-center transition-opacity duration-500 ${isDisconnected.value ? "" : "pointer-events-none"
        }`}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity bg-[#000000E5] duration-500 ${isDisconnected.value ? "opacity-75" : "opacity-0"
          }`}
        onClick={handleReset}
      />

      <div
        className={cn(
          "flex flex-col gap-4",
          "w-full",
          "p-6",
          {
            "pb-8": isPWA(),
            "pb-6": !isPWA(),
          },
          "rounded-t-2xl",
          "bg-[#272727]",
          "absolute",
          "z-40",
          {
            "bottom-0": isDisconnected.value,
            "-bottom-full": !isDisconnected.value,
          },
          "duration-500 ease-in-out"
        )}
      >
        <div className="flex items-center justify-between h-[2rem] gap-4">
          <p className="font-bold text-white text-[1.5rem] leading-[1.5625rem]">
            Disconnection
          </p>
          <button
            className="flex items-center justify-center w-8 h-8 p-[6px] rounded-full bg-[#2FD3BA]"
            onClick={handleReset}
          >
            <Icon
              icon="flowbite:close-circle-solid"
              width="22"
              height="22"
              style={{ color: "#292929" }}
            />
          </button>
        </div>
        <p className="text-[15px] leading-5 text-white text-left">
          Are you really disconnection?
        </p>
        <button
          className="flex items-center justify-center w-full py-[14px] px-4 rounded-full bg-[#FE4830]"
          onClick={handleDisconnect}
        >
          <p className="font-bold text-[18px] leading-5">
            Disconnect
          </p>
        </button>
      </div>
    </div>
  );
};

export default DisConnectModal;
