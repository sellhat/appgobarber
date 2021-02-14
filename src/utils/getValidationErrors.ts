/* eslint-disable @typescript-eslint/no-unused-vars */
import {ValidationError} from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path as keyof ValidationError] = error.message;
  });

  return validationErrors;
}
