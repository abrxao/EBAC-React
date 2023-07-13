import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({ href, children }) => {
  return (
    <Link
      className="font-bold text-sm tracking-widest underline hover:bg-black hover:text-white hover:no-underline  duration-150 "
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
