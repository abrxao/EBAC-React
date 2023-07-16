import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      className={twMerge(
        "font-bold text-sm tracking-widest underline hover:bg-black hover:text-white hover:no-underline  duration-150 ",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
