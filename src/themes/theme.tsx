import Link from "next/link";
import Nav, { NavItem } from "../components/nav";
import { Box, Button, Aside, Header, Main, Footer, Section, Article, Title } from "@fpkit/react";

import "@shawnsandy/first-paint/dist/css/libs/all.min.css";

import useTilg from "tilg";

import type { NextraThemeLayoutProps } from "../types";

export default function Layout({
  children,
  pageOpts,
  themeConfig,
}: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;
  useTilg();

  return (
    <>
      <Nav>
        <li>
          <Box as="h1" styles={{ "--fs": "1.5rem" }}>
            <Link href="/">{themeConfig.logo}</Link>
          </Box>
        </li>
        {pageMap.map((item) => {
          if (item.kind === "MdxPage" && item.route !== "/") {
            return <NavItem key={item.name} item={item} />;
          }
          return null;
        })}
      </Nav>
      <Header>
        <Title elm="h2" styles={{ "--fs": "var(--h1)" }}>
          {themeConfig.logo}
        </Title>
        <p>
          <Button
            type="button"
            data-variant="primary"
            styles={{ "--btn-radius": "var(--btn-pill)" }}
          >
            Get Started
          </Button>
        </p>
      </Header>
      <Main>
        <Section data-content>
          <Article>
            { (pageOpts.route === '/') ? <h1>Home</h1> : children }
            
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
