import { type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import { variantClass } from "./index";

export type ButtonVariant = "customStatus" | "secondary" | "destructive";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variantClass> {
	asChild?: boolean;
	icon?: LucideIcon;
	iconPosition?: "left" | "right";
	isLoading?: boolean;
	isDisabled?: boolean;
}
