import React, { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const headingStyles = cva("font-bold", {
  variants: {
    size: {
      xl: "text-2xl leading-[30px]",
      lg: "text-lg leading-[23px]",
      md: "text-base leading-[19px]",
      sm: "text-xs leading-[15px]",
    },
  },
});

interface HeadingProps {
  color?: string;
}

export interface Props
  extends HeadingProps,
    VariantProps<typeof headingStyles> {
  size: "xl" | "lg" | "md" | "sm";
}

type TComponent = "h1" | "h2" | "h3" | "h4";

const tags = {
  xl: "h1",
  lg: "h2",
  md: "h3",
  sm: "h4",
};

export const Heading: React.FC<PropsWithChildren<Props>> = ({
  size,
  children,
  ...props
}) => {
  const Component: TComponent = tags[size] as TComponent;

  return (
    <Component className={headingStyles({ size })} {...props}>
      {children}
    </Component>
  );
};
