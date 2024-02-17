export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' |
'NOT_FOUND' | 'CONFLICT' | 'INTERNAL_ERRO';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATE',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
