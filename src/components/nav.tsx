import { FP } from "@fpkit/react";
import Link from "next/link";
import { PageOpts } from "nextra";

export interface NavItemProps {
  item: {
    name: string;
    route: string;
  }
}
export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <FP as="nav">
      <ul>{children}</ul>
    </FP>
  );
}



export const NavItem = ({ item }: NavItemProps) => {
  return (
    <>
      <li key={item.name}>
        <Link href={item.route}>{item.name}</Link>
      </li>
    </>
  );
};
