import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </>
  );
}
