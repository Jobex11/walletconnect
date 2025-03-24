import React, {
  useMemo,
  ReactNode,
  useState,
  createContext,
  useContext,
} from "react";
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  WalletConnectWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import CustomWalletModal from "../components/Modals/CustomWalletModal";

interface WalletProviderProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the User context with a default value
const WalletContext = createContext<WalletProviderProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const network = WalletAdapterNetwork.Devnet;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to control modal visibility

  // Define supported wallets
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new PhantomWalletAdapter(),
      new WalletConnectWalletAdapter({
        network,
        options: {
          bridge: "https://bridge.walletconnect.org",
          qrcodeModalOptions: {
            mobileLinks: ["metamask", "trust"],
          },
        },
      }),
    ],
    [network]
  );

  // Define the RPC endpoint
  const endpoint = import.meta.env.VITE_RPC_ENDPOINT
    ? import.meta.env.VITE_RPC_ENDPOINT
    : "https://api.devnet.solana.com";

  return (
    <WalletContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <ConnectionProvider endpoint={endpoint}>
        <SolanaWalletProvider wallets={wallets} autoConnect>
          {children}
          <CustomWalletModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </SolanaWalletProvider>
      </ConnectionProvider>
    </WalletContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useWalletProvider = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWalletProvider must be used within a WalletProvider");
  }
  return context;
};
