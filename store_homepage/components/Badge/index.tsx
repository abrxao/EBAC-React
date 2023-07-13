import { FunctionComponent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  value?: string | number;
}

const Badge: FunctionComponent<BadgeProps> = ({
  children,
  className,
  value,
}) => {
  return (
    <div className="relative">
      {children}
      {value && (
        <div
          className={twMerge(
            " absolute w-5 -top-1/2 rounded-full -right-1/3 text-[.7rem] aspect-square flex items-center justify-center text-black bg-yellow-400 animate-bounce font-bold",
            className
          )}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default Badge;
