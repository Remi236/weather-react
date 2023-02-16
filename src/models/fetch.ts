export type FetchReturns<T> =
  | {
      json: null;
      error: string;
      statusCode: number;
    }
  | {
      json: T;
      error: null;
      statusCode: number;
    }
  | {
      json: null;
      error: string;
      statusCode: null;
    };

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
