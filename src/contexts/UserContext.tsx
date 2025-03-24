import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import useBoolean, { BooleanHookReturnValue } from "@/hooks/use-boolean";

// Define the shape of the context
interface UserContextProps {
  isDisconnected: BooleanHookReturnValue;
  isMenuOpen: BooleanHookReturnValue;
  isLangMenuOpen: BooleanHookReturnValue;
  isCreateModal: BooleanHookReturnValue;
  isExchange: BooleanHookReturnValue;
  isDesignMenuOpen: BooleanHookReturnValue;
  isLoading: BooleanHookReturnValue;
  isTrading: BooleanHookReturnValue;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  tempWallet: string;
  setTempWallet: React.Dispatch<React.SetStateAction<string>>;
  currentUrl: string;
  setCurrentUrl: React.Dispatch<React.SetStateAction<string>>;
  tokenList: IToken[];
  setTokenList: React.Dispatch<React.SetStateAction<IToken[]>>;
  selectedToken: IToken;
  setSelectedToken: React.Dispatch<React.SetStateAction<IToken>>;
  userTokenList: IToken[];
  setUserTokenList: React.Dispatch<React.SetStateAction<IToken[]>>;
  isSolPrice: number;
  setSolPrice: React.Dispatch<React.SetStateAction<number>>;
}

// Create the User context with a default value
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Create the User context provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const isMenuOpen = useBoolean(false);
  const isLangMenuOpen = useBoolean(false);
  const isCreateModal = useBoolean(false);
  const isDisconnected = useBoolean(false);
  const isExchange = useBoolean(false);
  const isLoading = useBoolean(false);
  const isTrading = useBoolean(false);
  const isDesignMenuOpen = useBoolean(false);

  const [state, setState] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [tempWallet, setTempWallet] = useState<string>("");
  const [tokenList, setTokenList] = useState<IToken[]>([]);
  const [selectedToken, setSelectedToken] = useState<IToken>({} as IToken);
  const [userTokenList, setUserTokenList] = useState<IToken[]>([]);
  const [isSolPrice, setSolPrice] = useState<number>(0);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        isLangMenuOpen,
        isCreateModal,
        isMenuOpen,
        isDisconnected,
        isExchange,
        isDesignMenuOpen,
        isLoading,
        isTrading,
        isSolPrice,
        setSolPrice,
        state,
        setState,
        error,
        setError,
        tempWallet,
        setTempWallet,
        tokenList,
        setTokenList,
        currentUrl,
        setCurrentUrl,
        userTokenList,
        setUserTokenList,
        selectedToken,
        setSelectedToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useUserProvider = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserProvider must be used within a UserProvider");
  }
  return context;
};
