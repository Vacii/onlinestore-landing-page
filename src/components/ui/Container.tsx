import { ReactElement } from "react";

interface ContainerProps {
  children: ReactElement;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
};

export default Container;
