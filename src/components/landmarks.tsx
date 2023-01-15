/**
 * @fileoverview Landmarks components
 */

import { FP } from "@fpkit/react";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <FP as="header">
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <FP as="main">
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <FP as="footer">
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Aside = ({ children }: { children: React.ReactNode }) => {
  return (
    <FP as="aside">
      <FP as="section">{children}</FP>
    </FP>
  );
};

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <FP as="section">{children}</FP>;
};
