import { FC, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const SectionContainer: FC<ContainerProps> = ({
  children,
  className = "",
  fullHeight = true,
  ...props
}) => {
  const heightClass = fullHeight ? "min-h-screen" : "min-h-fit";
  
  return (
    <div className={`pt-10 px-4 w-full ${heightClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default SectionContainer;
