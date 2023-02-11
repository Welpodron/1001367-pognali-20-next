import "../../wdyr";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export type AppContextType = {
  defaultHeaderHeight: number;
  setDefaultHeaderHeight: (value: number) => void;
};

export const AppContext = createContext<AppContextType>({
  defaultHeaderHeight: 0,
  setDefaultHeaderHeight: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [defaultHeaderHeight, setDefaultHeaderHeight] = useState(0);

  return (
    <AppContext.Provider
      value={{ defaultHeaderHeight, setDefaultHeaderHeight }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
