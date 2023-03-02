import { NextraThemeLayoutProps } from "nextra";
import { PageOpts } from "nextra";

export const usePageOpts = (options) => {
  const { pageOpts } = options;

  const { pageMap } = pageOpts;

  if (!pageMap) {
    return { contentDirs: [], postList: [] };
  }

  const postList: Array<PageOpts> = pageMap.filter(
    (item: { kind: string; route: string; frontMatter: {} }) =>
      item.kind === "MdxPage" &&
      item.route !== "/" &&
      item.frontMatter !== undefined
  );

  const dirList: Array<PageOpts> = pageMap.filter(
    (item: { kind: string }) => item.kind === "Folder"
  );


  return { dirList, postList};
};
