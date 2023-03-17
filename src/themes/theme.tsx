import Link from "next/link";
import Nav, { NavList } from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
import ArticleList from "@/components/articles-list";
import { usePageOpts } from "@/components/usePageOpts";
import {
  Box,
  Aside,
  Main,
  Footer,
  Section,
  Article
} from "@fpkit/react";

import { useConfig } from "nextra-theme-docs";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({
  children,
  pageOpts,
  themeConfig
}: NextraThemeLayoutProps) {

  const { dirList, posts, postList} = usePageOpts({pageOpts});
  
  postList.map((item) => {
    const { route, frontMatter } = item;
  });
  
  return (
    <>
      <Nav>
        <ul>
          <li>
            <Box as="h1" styles={{ "--fs": "1.5rem" }}>
              <Link href="/">{themeConfig.logo}</Link>
            </Box>
          </li>
        </ul>
        <ul>
          <NavList items={dirList} />  
        </ul>
      </Nav>
      <ThemeHeader title={themeConfig.logo} />
      <Main>
        <Section data-content>
          <Article>
            {pageOpts.route === "/" ? (
              <>
                <ArticleList postList={postList}
                showDescription />
              </>
            ) : (
              children
            )}
          </Article>
          <Aside>
            <ul data-fp-list="unstyled">
              <ArticleList
                postList={postList} 
                as="li"
                elm="h4"
              />
            </ul>
          </Aside>
        </Section>
      </Main>
      <hr />
      <Footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </Footer>
    </>
  )};