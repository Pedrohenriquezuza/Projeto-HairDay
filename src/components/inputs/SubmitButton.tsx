import type { ReactNode } from "react";

type SubmitButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function SubmitButton({ children, onClick }: SubmitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-yellow text-gray-900 flex text-center justify-center py-5 mt-6 rounded-lg"
    >
      {children}
    </button>
  );
}
