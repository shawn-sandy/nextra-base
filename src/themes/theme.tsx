import Link from "next/link";
import Nav, { NavItem } from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
import ArticleList from "@/components/articles-list";
import {
  Box,
  Aside,
  Main,
  Footer,
  Section,
  Article,
  Title,
} from "@fpkit/react";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({
  children,
  pageOpts,
  themeConfig
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  return (
    <>
      <Nav>
        <li>
          <Box as="h1" styles={{ "--fs": "1.5rem" }}>
            <Link href="/">{themeConfig.logo}</Link>
          </Box>
        </li>
      </Nav>
      <ThemeHeader title={themeConfig.logo} />
      <Main>
        <Section data-content>
          <Article>
            {pageOpts.route === "/" ? (
              <>
                <ArticleList pageMap={pageMap} />
              </>
            ) : (
              children
            )}
          </Article>
          <Aside>
            <ul data-fp-list="unstyled">
              <ArticleList
                pageMap={pageMap}
                as="li"
                showDescription={false}
                elm="h4"
              />
            </ul>
          </Aside>
        </Section>
      </Main>
      <hr />
      <Footer>
        <p>Copyright &copy; 2022</p>
      </Footer>
    </>
  );
}
