export type ErrorType = {
  code: number;
  message: string;
};

export type ErrorContext = {
  error: ErrorType;
  setStatusCode?: (code: number) => void;
};
