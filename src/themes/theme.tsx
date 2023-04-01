import Link from "next/link";
import Nav, { NavList } from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
import ArticleList from "@/components/articles-list";
// import { usePageOpts } from "@/components/usePageOpts";
import { Navigation, PostsList, ThemeMain } from "@fpkit/nextjs";
import { usePageOpts } from "@fpkit/nextjs/libs/hooks";
import { FilterMdxPages } from "@fpkit/nextjs/libs/libs";

import { Box, Aside, Main, Footer, Section, Article } from "@fpkit/react";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import type { NextraThemeLayoutProps } from "nextra";
import { log } from "console";
import { MDXProvider } from "nextra/mdx";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  const { dirList, postList } = usePageOpts({ options: { pageOpts } });

  const latest = FilterMdxPages(pageMap);

  const brand = { url: "/", logo: "Nextra Base" };

  return (
    <>
      <Navigation data={pageMap} brand={brand} />
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
        <p>&copy; {new Date().getFullYear()}</p>
      </Footer>
    </>
  );
}
