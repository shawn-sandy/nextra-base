import { PageOpts } from "nextra";
import { FP, Title } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export type listProps = Pick<PageOpts, "pageMap">;

export type ArticleListProps = {
  showDescription?: boolean;
  elm?: "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "article" | "li";
} & listProps;

export const ArticleList = ({
  pageMap,
  showDescription = true,
  elm = "h2",
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
            <FP
              as={as}
              key={React.useId()}
              styles={{ marginBottom: ".5rem" }}
              {...props}
            >
              {!!showDescription ? (
                <>
                  <Title elm={elm}>
                    <Link href={item.route}>{item.frontMatter.title}</Link>
                  </Title>
                  <p>{item.frontMatter.description}</p>
                </>
              ) : (
                <Link href={item.route}>{item.frontMatter.title}</Link>
              )}
            </FP>
          );
        }
        return null;
      })}
    </>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
