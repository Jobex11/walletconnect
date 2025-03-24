import { useWallet } from "@solana/wallet-adapter-react";
import { Icon } from "@iconify-icon/react";

import { useUserProvider } from "@/contexts/UserContext";
import { useWalletProvider } from "@/contexts/WalletContext";

const Header = () => {
  const { isMenuOpen, isDisconnected } = useUserProvider();
  const { setIsModalOpen } = useWalletProvider();

  const wallet = useWallet();

  const handleConnectWallet = () => {
    if (!wallet.connected && !wallet.connecting) {
      console.log("wallet is connecting");
      setIsModalOpen(true);
    } else {
      isDisconnected.setTrue();
    }
  };

  return (
    <header
      className="flex p-4 w-full h-20 gap-2 fixed top-0 bg-[#2FD3BA]"
    >
      <button
        className="flex w-full items-center justify-between px-4 py-[14px] rounded-full  bg-[#82E5D6]"
        style={{
          boxShadow: "0.25rem 0.25rem 0 0 rgba(0, 0, 0, 4%)",
        }}
        onClick={handleConnectWallet}
      >
        <p className="font-raleway lining-nums proportional-nums font-bold text-[15px] leading-5">
          {wallet.connected
            ? wallet?.publicKey?.toString()
            : "connect Wallet"}
        </p>
        <Icon
          icon={
            wallet.connected ? "gravity-ui:link" : "streamline:wallet-solid"
          }
          width="20"
          height="20"
          style={{ color: "#07564A" }}
        />
      </button>

      <button
        className="flex w-fit items-center justify-center p-[14px] rounded-full"
        style={{
          boxShadow: "0.25rem 0.25rem 0 0 rgba(0, 0, 0, 4%)",
        }}
        onClick={() => {
          isMenuOpen.setTrue();
        }}
      >
        <Icon
          icon="streamline:dashboard-circle-solid"
          width="20"
          height="20"
          style={{ color: "#07564A" }}
        />
      </button>
    </header>
  );
};

export default Header;
