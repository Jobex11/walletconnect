import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

//wallet connect
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";

import "@fontsource/raleway";
import "@fontsource/raleway/700.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/400.css";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/400.css";

const solanaWeb3JsAdapter = new SolanaAdapter();

const projectId = "7ca5531f56b54bc50c5e522b084071bb";

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],

  projectId,
  features: {
    analytics: true, // Optional
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
