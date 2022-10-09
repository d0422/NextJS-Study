import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
interface Iparams {
  params: {
    params: string[];
  };
}
export default function Movie({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id]: [string, string] = params || [];
  return (
    <>
      <Head>
        <title>{title} | Next Movie</title>
      </Head>
      <h4>{title || "Loading..."}</h4>
    </>
  );
}
export function getServerSideProps({ params: { params } }: Iparams) {
  return {
    props: { params },
  };
}
