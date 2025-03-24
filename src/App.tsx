import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { CustomVh } from "./features/custom-vh";
import { UserProvider } from "./contexts/UserContext";
import { WalletProvider } from "./contexts/WalletContext";
import Layout from "./components/Layout/Layout";
import Tokens from "./pages/Tokens";

import "./index.css";

const App: React.FC = () => {
  return (
    <UserProvider>
      <WalletProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Tokens />} />
            </Route>
          </Routes>
        </Router>
        <CustomVh />
      </WalletProvider>
    </UserProvider>
  );
};

export default App;
