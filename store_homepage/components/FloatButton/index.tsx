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
    <span className={"border border-black"}>
      <button
        className={twMerge(
          " bg-black -translate-x-2px -translate-y-2px w-full h-full text-white p-3 border-2 border-black active:translate-x-0 active:translate-y-0 duration-150 text-sm flex items-center gap-3 tracking-wider font-bold hover:text-white/50",
          className
        )}
      >
        {children}
      </button>
    </span>
  );
};
export default FloatButton;
