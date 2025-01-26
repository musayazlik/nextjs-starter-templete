// src/components/ui/CustomButton.tsx
import { Button as ShadcnButton } from '@/components/ui/button'; 
import { cn } from '@/lib/utils'; 
import { ButtonProps } from './button.types';
import styles from './button.module.scss';
import { cva } from "class-variance-authority";
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';

import { buttonVariants } from '@/components/ui/button';

export const variantClass = cva(styles.button, {
	variants: {
		variant: {
			customStatus: styles.customStatus,
			secondary: buttonVariants({ variant: 'secondary' }),
			destructive: buttonVariants({ variant: 'destructive' }),
		},
		size: {
      default: buttonVariants({ size: 'default' }),
      sm: buttonVariants({ size: 'sm' }),
      lg: buttonVariants({ size: 'lg' }),
    }
  },
  defaultVariants: {
    variant: 'customStatus',
    size: 'default',
	},
});

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, icon: Icon, iconPosition = 'left', isLoading, isDisabled, children, ...props },
    ref
  ) => {

  return (
    <ShadcnButton
        ref={ref}
        className={cn(variantClass({variant,size, className }))}
        disabled={isLoading || isDisabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className={styles.loader} />
        ) : (
          Icon &&
          iconPosition === 'left' && <Icon className={styles.icon} />
        )}
        {children}
        {!isLoading && Icon && iconPosition === 'right' && (
          <Icon className={styles.icon} />
        )}
      </ShadcnButton>
  );				
}
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
