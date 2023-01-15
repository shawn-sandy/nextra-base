import Link from "next/link";
import Nav from "./components/nav";
// import type { NextraThemeLayoutProps } from 'nextra'

import type { PageOpts } from "nextra";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import useTilg from "tilg";

export type NextraThemeLayoutProps = {
  pageOpts: PageOpts;
  pageProps: any;
  themeConfig: any | null;
  children: React.ReactNode;
};

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  useTilg();

  return (
    <>
      <h1>My Theme</h1>
      <Nav>
        {pageMap.map((item) => {
          if (item.kind === "MdxPage") {
            return (
              <li>
                <Link key={item.name} href={item.route}>
                  {item.name}
                </Link>
              </li>
            );
          }
          return null;
        })}
      </Nav>
      <div style={{ border: "1px solid" }}>{children}</div>
    </>
  );
}
