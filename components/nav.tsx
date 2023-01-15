import { FP } from "@fpkit/react";
import Link from "next/link";
import { NextraThemeLayoutProps } from "../src/types";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <FP as="nav">
      <ul>{children}</ul>
    </FP>
  );
}

export const NavItem = ({ pageOpts }: NextraThemeLayoutProps) => {
  const { pageMap } = pageOpts;
  {
    pageMap.map((item) => {
      if (item.kind === "MdxPage") {
        return (
          <li>
            <Link key={item.name} href={item.route}>
              {item.name}
            </Link>
          </li>
        );
      }
      return null;
    });
  }
};
