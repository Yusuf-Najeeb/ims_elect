import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorProps {
  message?: string;
}

export const FormError = ({ message }: ErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm font-medium text-destructive">
      <ExclamationTriangleIcon className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};
