import Link from "next/link";
import Nav, { NavItem } from "@/components/nav";
import ThemeHeader from "@/components/theme-header";
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

import useTilg from "tilg";

import get from "lodash.get";

import type { NextraThemeLayoutProps } from "nextra";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  const mdxPages = pageMap.filter((item) => item.kind === "MdxPage");

  const frontMatter = mdxPages.filter(
    // @ts-ignore
    (item) => item?.frontMatter !== undefined
  );

  return (
    <>
      <Nav>
        <li>
          <Box as="h1" styles={{ "--fs": "1.5rem" }}>
            <Link href="/">{themeConfig.logo}</Link>
          </Box>
        </li>
        {pageMap.map((item) => {
          if (
            item.kind === "MdxPage" &&
            item.route !== "/" &&
            item.frontMatter !== undefined
          ) {
            return <NavItem key={item.name} item={item} />;
          }
          return null;
        })}
      </Nav>
      <ThemeHeader title={themeConfig.logo} />
      <Main>
        <Section data-content>
          <Article>
            {pageOpts.route === "/" ? (
              <>
                {pageMap.map((item) => {
                  if (
                    item.kind === "MdxPage" &&
                    item.route !== "/" &&
                    item.frontMatter !== undefined
                  ) {
                    return (
                      <Article key={item.name}>
                        <Title elm="h3">{item.frontMatter.title}</Title>
                        <p>{item.frontMatter.description}</p>
                      </Article>
                    );
                  }
                  return null;
                })}
              </>
            ) : (
              children
            )}
          </Article>
          <Aside>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quas non laborum repudiandae earum eveniet perferendis vitae
              veritatis in accusamus esse necessitatibus eum, obcaecati ut nobis
              similique laboriosam sint iusto?
            </p>
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
