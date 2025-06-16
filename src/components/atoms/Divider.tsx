interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`w-full border border-gray-300 dark:border-gray-800 ${className}`}
    />
  );
}
