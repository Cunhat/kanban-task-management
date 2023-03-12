import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const bodyStyles = cva("", {
  variants: {
    size: {
      lg: "text-[13px] leading-[23px]",
      md: "text-xs leading-[15px] font-bold",
    },
  },
});

interface BodyProps {
  color?: string;
  className?: HTMLAttributes<HTMLBodyElement>["className"];
}

export interface Props extends BodyProps, VariantProps<typeof bodyStyles> {
  size: "lg" | "md";
}

export const Body: React.FC<PropsWithChildren<Props>> = ({
  size,
  children,
  className,
  ...props
}) => {
  const Component = "p";

  return (
    <Component className={bodyStyles({ size, className })} {...props}>
      {children}
    </Component>
  );
};
