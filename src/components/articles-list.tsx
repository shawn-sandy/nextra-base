import { PageOpts } from "nextra";
import { Box, Title } from "@fpkit/react";
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
  return (
    <>   
      {postList?.map((item) => {
          const { route } = item;
          const { title, description } = item.frontMatter;
          return (
            <Box
              as={as}
              key={React.useId()}
              {...props}
            >
              {!!showDescription ? (
                <>
                  <Title elm={elm}>
                    
                    <Link href={route}>{title}</Link>
                  </Title><hr />
                  <p>{description}</p>
                </>
              ) : (
                <Link href={route}>{item.frontMatter.title}</Link>
              )}
            </Box>
          );
        return null;
      })}
    </>
  );
};

export default ArticleList;
ArticleList.displayName = "ArticleList";
