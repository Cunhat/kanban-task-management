import { cva, VariantProps } from "class-variance-authority";
import { Props as ButtonOrLinkProps, ButtonOrLink } from "./ButtonOrLink";

const buttonStyles = cva(
  "flex items-center justify-center hover:cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-white hover:bg-primaryHover disabled:bg-primaryHover",
        secondary:
          "text-primary bg-customGrey-100 hover:bg-customGrey-500 disabled:bg-customGrey-500",
        destructive:
          "text-white bg-customRed hover:bg-customRedHover disabled:bg-customRedHover",
      },
      fullWidth: { true: "w-full" },
      size: {
        sm: "py-2 px-4 rounded-[20px] text-sm",
        lg: "py-3 px-6 rounded-3xl text-base",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export const Button: React.FC<Props> = ({
  intent,
  fullWidth,
  size,
  ...props
}) => {
  return (
    <ButtonOrLink
      className={buttonStyles({ intent, fullWidth, size })}
      {...props}
    />
  );
};
