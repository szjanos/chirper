import { createContext, Dispatch, SetStateAction } from "react";

type ErrorContext = {
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
};

const ErrorContext = createContext<ErrorContext>({
  setErrorMessage: () => null,
} as ErrorContext);

export default ErrorContext;
