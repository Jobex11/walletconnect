interface IPoolInfo {
  buys: number;
  sells: number
  buy_vol: number;
  sell_vol: number;
  buyers: number;
  sellers: number;
}

interface IHistory {
  holders?: number;
  liquidity?: string;
  marketCap?: string;
  price?: string;
  price_change?: string[];
  pool_info?: IPoolInfo[];
}

interface IToken {
  id?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  creator?: string;
  mint: string;
  name: string;
  symbol: string;
  description?: string;
  image: string;
  metadata?: string;
  decimals: number;
  supply?: string;
  is_blocked?: boolean;
  website?: string;
  telegram?: string;
  twitter?: string;
  instagram?: string;
  // histories?: IHistory[];
  holders?: number;
  liquidity?: string;
  marketCap?: string;
  price?: string;
  price_change?: string[];
  pool_info?: IPoolInfo[];
}

interface IPricePeriod {
  period: string;
  value: string
}

interface IMenu {
  icon: string;
  name: string;
}

interface IChangingState {
  type: string;
  amount: number;
  total: string;
  totalAmount: number;
  sells: string;
  sellAmount: number;
}

interface IBarColor {
  color1: string;
  color2: string;
  color3: string;
}


interface IPeriodButtonProps {
  period: string;
  label: string;
  selectedPeriod: string;
  handleVolume: (period: string) => void;
  priceChange?: number;
}

interface IInfoBoxProps {
  title: string;
  value: string | undefined;
}

interface IVolumeBarProps {
  period: number;
  poolInfo: IPoolInfo[];
  match: string;
}