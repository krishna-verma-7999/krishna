export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return {
      error: false,
    };
  }

  return true;
};

export const getErrorMessage = (error: unknown) => {
  let Message: string;

  if (error instanceof Error) {
    Message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    Message = String(error.message);
  } else if (typeof error === "string") {
    Message = error;
  } else {
    Message = "Something went wrong";
  }

  return Message;
};
