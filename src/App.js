import Footer from "./Components/Footer.js";
import NavBar from "./Components/Navbar.js";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
          <Component key={router.asPath} {...pageProps} />
        <Footer />
      </main>
    </>
  );
}