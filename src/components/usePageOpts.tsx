import { NextraThemeLayoutProps } from "nextra";

export const usePageOpts = (props: NextraThemeLayoutProps) => {
  const { pageOpts } = props;
  const { pageMap, title, headings } = pageOpts;
  return { pageOpts, pageMap, title, headings };
};
