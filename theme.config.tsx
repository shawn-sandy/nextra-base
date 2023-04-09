// import { DocsThemeConfig } from 'nextra-theme-docs'
import { MDXComponents } from "@fpkit/nextjs/libs/libs";

export default {
  logo: <span>Nextra Base</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  brand: {
    logo: <span>FPKIT NEXTRA</span>,
    url: "/",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
  components: MDXComponents,
};
