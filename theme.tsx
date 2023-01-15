import Link from "next/link";
import Nav, { NavItem } from "./src/components/nav";
import {
  Header,
  Main,
  Section,
  Footer,
  Aside,
} from "./src/components/landmarks";
import { FP } from "@fpkit/react";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import useTilg from "tilg";

import type { NextraThemeLayoutProps } from "./src/types";

export default function Layout({ children, pageOpts, themeConfig }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  useTilg();

  return (
    <>
      <Nav>
        <li>
          <FP as="h1" styles={{ '--fs': '1.5rem'}}>
            <Link href="/">{ themeConfig.logo}</Link>
          </FP>
        </li>
        {pageMap.map((item) => {
          if (item.kind === "MdxPage" && item.route !== "/") {
            return <NavItem key={item.name} item={item} />;
          }
          return null;
        })}
      </Nav>
      <Header>
          <h2>Title</h2>
      </Header>
      <Main>
        <FP as="section">{children}</FP>
      </Main>
      <hr />
      <Footer>
        <p>Copyright &copy; 2022</p>
      </Footer>
    </>
  );
}
