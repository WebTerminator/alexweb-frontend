import React from "react";
import Link from "next/link";
import { Navigation, NavLink } from "./style";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const { route } = router;

  return (
    <Navigation>
      <Link href="/">
        <NavLink className={route === "/" ? "active" : ""}>home</NavLink>
      </Link>
      <Link href="/blog">
        <NavLink className={route.startsWith("/blog") ? "active" : ""}>
          blog
        </NavLink>
      </Link>
      <Link href="/projects">
        <NavLink className={route.startsWith("/projects") ? "active" : ""}>
          projects
        </NavLink>
      </Link>
    </Navigation>
  );
};

export default Nav;
