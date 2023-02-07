import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../../wdyr";
import localFont from "@next/font/local";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const bloggerSans = localFont({
  src: [
    {
      path: "../fonts/bloggersans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/bloggersans-lightitalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/bloggersans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/bloggersans-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/bloggersans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/bloggersans-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    { path: "../fonts/bloggersans-bold.woff2", weight: "700", style: "normal" },
    {
      path: "../fonts/bloggersans-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export type TAppContext = {
  defaultHeaderHeight: number;
  setDefaultHeaderHeight: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<TAppContext>({
  defaultHeaderHeight: 0,
  setDefaultHeaderHeight: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [defaultHeaderHeight, setDefaultHeaderHeight] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{ defaultHeaderHeight, setDefaultHeaderHeight }}
    >
      <style jsx global>
        {`
          html {
            font-family: ${bloggerSans.style.fontFamily}, sans-serif;
            scroll-behavior: smooth !important;
          }
        `}
      </style>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
