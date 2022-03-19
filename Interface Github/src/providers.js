import React from "react";
import GithubProvider from "./provider/github-provider";
import { ResetCSS } from "./components/global/resetCSS";
import App from "./App";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
