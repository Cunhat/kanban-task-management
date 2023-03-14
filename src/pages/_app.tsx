import { SessionProvider } from "next-auth/react";
import { NextPage } from "next/types";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";

import { api } from "@/utils/api";

import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      <ThemeProvider storageKey="preferred-theme" attribute="class">
        <main className={`${jakarta.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
