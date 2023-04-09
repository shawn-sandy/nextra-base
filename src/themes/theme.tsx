import Link from "next/link";
import Nav from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
import ArticleList from "@/components/articles-list";
// import { usePageOpts } from "@/components/usePageOpts";
import {
  NavBrand,
  Navigation,
  PostsList,
  ThemeMain,
  NavList,
} from "@fpkit/nextjs";
import { usePageOpts } from "@fpkit/nextjs/libs/hooks";
import { FilterMdxPages, FilterPageType } from "@fpkit/nextjs/libs/libs";

import { Box, Aside, Main, Footer, Section, Article, Tag } from "@fpkit/react";

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

  console.log({ pages });

  const brand = { url: "/", logo: "Nextra Base" };

  return (
    <>
      <Nav>
        <NavBrand logo={themeConfig.brand.logo} url={themeConfig.brand.url} />
        <NavList postList={pages} />
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
