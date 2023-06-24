import Nav from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
import { NavBrand, PostsList, ThemeMain, NavList, Toc } from "@fpkit/nextjs";
import { FilterMdxPages, FilterPageType } from "@fpkit/nextjs/libs/libs";

import { Footer } from "@fpkit/react";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import type { MdxFile, NextraThemeLayoutProps } from "nextra";
import { MDXProvider } from "nextra/mdx";
import { log } from "console";

/**
 * The main layout component for the Nextra theme.
 * @param children The child components to render.
 * @param pageOpts The page options for the current page.
 * @param themeConfig The configuration options for the theme.
 * @returns The rendered layout component.
 */
export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap, headings } = pageOpts;

  const latest = FilterMdxPages(pageMap);
  const pages = FilterPageType(pageMap);

  const brand = { url: "/", logo: "Nextra Base" };

  /**
   * The sidebar component for the layout.
   * @returns The rendered sidebar component.
   */
  const SideBar = () => {
    return (
      <>
        <Toc items={headings} />
        <div>
          <h3 data-fp-text="h3">Recent Posts</h3>
        </div>
      </>
    );
  };

  return (
    <>
      {/* The navigation component */}
      <Nav>
        <NavBrand logo={themeConfig.brand.logo} url={themeConfig.brand.url} />
        <NavList pages={pages} />
      </Nav>

      {/* The header component */}
      <ThemeHeader title={themeConfig.logo} />

      {/* The main content component */}
      <ThemeMain sideBar={<SideBar />}>
        {/* Render the latest posts or the child components */}
        {pageOpts.route === "/" && latest.length > 0 ? (
          <PostsList postList={latest} showDescription />
        ) : (
          <MDXProvider components={themeConfig.components}>
            {children}
          </MDXProvider>
        )}
      </ThemeMain>

      {/* The footer component */}
      <Footer>
        <section>
          <p>&copy; {new Date().getFullYear()}</p>
        </section>
      </Footer>
    </>
  );
}
