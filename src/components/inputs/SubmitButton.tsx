import type { ReactNode } from "react";

type SubmitButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export default function SubmitButton({
  children,
  disabled,
  onClick,
}: SubmitButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`w-full bg-yellow text-gray-900 flex text-center justify-center py-5 mt-6 rounded-lg border border-transparent hover:border hover:border-yellow-light
        
        ${disabled ? "opacity-30" : "opacity-100"} 
        `}
    >
      {children}
    </button>
  );
}
