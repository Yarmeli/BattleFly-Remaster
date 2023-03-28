import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import Head from "next/head";
import NavbarComponent from "@/components/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>BattleFly - Play to Earn Web3 Strategy Game</title>
        <meta
          name="description"
          content="BattleFly - Play to Earn Web3 Strategy Game"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col text-white">
        <NavbarComponent />
        <main className="flex flex-grow flex-col items-center justify-center">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default MyApp;
