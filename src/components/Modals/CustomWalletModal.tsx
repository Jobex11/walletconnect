import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletIcon } from "@solana/wallet-adapter-react-ui";
import { Icon } from "@iconify-icon/react";
import cn from "classnames";

import { isPWA } from "@/utils/is-pwa";

interface CustomWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomWalletModal: React.FC<CustomWalletModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { wallets, select } = useWallet();

  return (
    <div
      className={`fixed inset-0 z-30 flex items-end justify-center transition-opacity duration-500 ${isOpen ? "" : "pointer-events-none"
        }`}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity bg-[#000000E5] duration-500 ${isOpen ? "opacity-75" : "opacity-0"
          }`}
        onClick={onClose}
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
            "bottom-0": isOpen,
            "-bottom-full": !isOpen,
          },
          "duration-500 ease-in-out"
        )}
      >
        <div className="flex items-center justify-between h-[2rem] gap-4">
          <p className="font-bold text-white text-[1.5rem] leading-[1.5625rem]">
            Wallet connect
          </p>
          <button
            className="flex items-center justify-center w-8 h-8 p-[6px] rounded-full bg-[#2FD3BA]"
            onClick={onClose}
          >
            <Icon
              icon="flowbite:close-circle-solid"
              width="22"
              height="22"
              style={{ color: "#292929" }}
            />
          </button>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.adapter.name}
              onClick={() => {
                select(wallet.adapter.name);
                onClose(); // Close the modal after selecting a wallet
              }}
              className="flex items-center border border-[#272727] w-full p-3 bg-[#272727] rounded-full hover:bg-[#4A4A4A] hover:border-[#2FD3BA]"
            >
              <WalletIcon wallet={wallet} className="w-6 h-6 mr-3" />
              <span
                className="font-bold text-[18px] leading-5"
              >
                {wallet.adapter.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomWalletModal;
