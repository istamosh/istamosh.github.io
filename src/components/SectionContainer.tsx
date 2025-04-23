import { FC, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const SectionContainer: FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`pt-10 px-4 w-full h-screen ${className}`} {...props}>
      {children}
    </div>
  );
};

export default SectionContainer;
