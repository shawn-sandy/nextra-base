import { PageOpts } from "nextra";
import { FP, Title } from "@fpkit/react";
import Link from "next/link";
import React from "react";

export type listProps = Pick<PageOpts, "pageMap">;


export type ArticleListProps = {
  showDescription?: boolean;
  elm?: "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "article" | "li";
  postList?: Array<PageOpts>;
} 


export const ArticleList = ({
  showDescription = false,
  elm = "h2",
  as = "article",
  postList,
  ...props
}: ArticleListProps) => {
  console.log({postList});
  return (
    <>
    
      {postList?.map((item) => {
        // if (
        //   item?.kind === "MdxPage" &&
        //   item.frontMatter !== undefined
        // ) {
          const { route } = item;
          const { title, description } = item.frontMatter;
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
                    <Link href={route}>{title}</Link>
                  </Title>
                  <p>{description}</p>
                </>
              ) : (
                <Link href={route}>{item.frontMatter.title}</Link>
              )}
            </FP>
          );
        // }
        return null;
      })}
    </>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
