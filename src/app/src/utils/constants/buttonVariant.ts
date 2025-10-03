export type TButtonVariant = "gray" | "black" | "ghost";
export interface IButtonVariant {
  gray: string;
  black: string;
  ghost: string;
}

export const buttonVariant: IButtonVariant = {
  gray: "border border-[var(--color-gray)] hover:bg-[var(--color-gray-light)] text-[var(--color-gray-plus)]",
  black:
    "bg-[var(--color-black)] text-white hover:bg-[var(--color-black-hover)]",
  ghost: "hover:text-[var(--color-orange)]",
};
