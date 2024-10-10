import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      backButtonLabel="Back to login page"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center justify-center text-destructive">
        <ExclamationTriangleIcon className="w-10 h-10" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
