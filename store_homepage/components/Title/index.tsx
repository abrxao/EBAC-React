import { FunctionComponent, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return <h2 className="text-3xl font-bold tracking-tight mb-2">{children}</h2>;
};

export default Title;
