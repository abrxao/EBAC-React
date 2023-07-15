import { FunctionComponent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type baseComponent = {
  className?: string;
  children?: ReactNode;
};

const FloatButton: FunctionComponent<baseComponent> = ({
  className,
  children,
}) => {
  return (
    <button
      className="group"
    >
      <span className={"ring-1 ring-inset ring-black  flex"}>
        <span
          className={twMerge(
            " bg-black -translate-x-1 -translate-y-1 text-white p-3 active:translate-x-0  active:translate-y-0 duration-150 text-sm flex items-center gap-3 tracking-wider font-bold hover:text-white/50",
            className
          )}
        >
          {children}
        </span>
      </span>
    </button>
  );
};
export default FloatButton;
