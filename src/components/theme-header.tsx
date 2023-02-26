import { Header, Title, Button, Text } from "@fpkit/react";
import React from "react";

export interface HeaderProps {
  title: React.ReactNode;
  ctaLabel?: React.ReactNode;
}
export const ThemeHeader = ({ title, ctaLabel }: HeaderProps) => {
  return (
    <Header>
      <Title elm="h2" styles={{ "--fs": "var(--h1)" }}>
        {title}
      </Title>
      <Text elm="p">
        <Button type="button" data-variant="primary" data-style="pill">
          {ctaLabel || "Get Started"}
        </Button>
      </Text>
    </Header>
  );
};

ThemeHeader.displayName = "Header";
export default ThemeHeader;
