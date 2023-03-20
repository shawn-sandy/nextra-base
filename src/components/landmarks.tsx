/**
 * @fileoverview Landmarks components
 */

import { Tag } from "@fpkit/react";

export const Header = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Tag as="header" {...props}>
      <Tag as="section">{children}</Tag>
    </Tag>
  );
};

export const Main = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <Tag as="main" {...props}>
      {children}
    </Tag>
  );
};

export const Footer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Tag as="footer" {...props}>
      <Tag as="section">{children}</Tag>
    </Tag>
  );
};

export const Aside = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Tag as="aside" {...props}>
      <Tag as="section">{children}</Tag>
    </Tag>
  );
};

export const Section = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Tag as="section" {...props}>
      {children}
    </Tag>
  );
};

export const Article = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Tag as="article" {...props}>
      {children}
    </Tag>
  );
};
