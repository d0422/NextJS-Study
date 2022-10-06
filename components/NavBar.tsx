import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "white" }}>Home</a>
      </Link>
      <Link href="/aboutus">
        <a style={{ color: router.pathname === "/aboutus" ? "red" : "white" }}>
          Aboutus
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
