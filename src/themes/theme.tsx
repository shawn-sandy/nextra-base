import Nav from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
import { NavBrand, PostsList, ThemeMain, NavList } from "@fpkit/nextjs";
import { FilterMdxPages, FilterPageType } from "@fpkit/nextjs/libs/libs";

import { Footer } from "@fpkit/react";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import type { MdxFile, NextraThemeLayoutProps } from "nextra";
import { MDXProvider } from "nextra/mdx";
import { log } from "console";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  const latest = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  const brand = { url: "/", logo: "Nextra Base" };

  return (
    <>
      <Nav>
        <NavBrand logo={themeConfig.brand.logo} url={themeConfig.brand.url} />
        <NavList pages={pages} />
      </Nav>
      <ThemeHeader title={themeConfig.logo} />
      <ThemeMain>
        {pageOpts.route === "/" && latest.length > 0 ? (
          <PostsList postList={latest} showDescription />
        ) : (
          <MDXProvider components={themeConfig.components}>
            {children}
          </MDXProvider>
        )}
      </ThemeMain>

      <Footer>
        <section>
          <p>&copy; {new Date().getFullYear()}</p>
        </section>
      </Footer>
    </>
  );
}
