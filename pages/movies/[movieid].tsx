import { useRouter } from "next/router";
import { useState } from "react";

export default function Movie() {
  const router = useRouter();
  console.log(router.query);
  return <h4>{router.query.title || "Loading..."}</h4>;
}
