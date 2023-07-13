import { FunctionComponent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type baseComponent = {
  className?: string;
  children?: ReactNode;
};

const FlutterButton: FunctionComponent<baseComponent> = ({
  className,
  children,
}) => {
  return (
    <span className={"border border-black"}>
      <button
        className={twMerge(
          " bg-black -translate-x-1 -translate-y-1 w-full h-full text-white p-3 active:translate-x-0 active:translate-y-0 duration-100 flex items-center gap-3 tracking-wide",
          className
        )}
      >
        {children}
      </button>
    </span>
  );
};
export default FlutterButton;
