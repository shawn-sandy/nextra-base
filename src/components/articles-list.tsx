import Rect from "react";
import { PageOpts } from "nextra";
import { Article, FP, Title } from "@fpkit/react";

export type listProps = Pick<PageOpts, "pageMap">;

export type ArticleListProps = {
  showDescription?: boolean;
  elm?: "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "article" | "li" | "div";
} & listProps;

export const ArticleList = ({
  pageMap,
  showDescription = true,
  elm = "h3",
  as = "article",
  ...props
}: ArticleListProps) => {
  return (
    <>
      {pageMap.map((item) => {
        if (
          item.kind === "MdxPage" &&
          item.route !== "/" &&
          item.frontMatter !== undefined
        ) {
          return (
            <>
              <FP as={as} key={item.name} styles={{ marginBottom: ".5rem" }} {...props}>
                <Title elm={elm}>{item.frontMatter.title}</Title>
                {!!showDescription && <p>{item.frontMatter.description}</p>}
              </FP>
            </>
          );
        }
        return null;
      })}
    </>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
