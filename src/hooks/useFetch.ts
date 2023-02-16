import { FetchMethod, FetchReturns } from '../models';
import { getErrorMessage } from '../helpers';

// const BASE_API = 'http://localhost:3000/api';
const DEFAULT_DATA: object = {};
const DEFAULT_HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};
const DEFAULT_OPTIONS: object = {};

export const api = async <T>(
  method: FetchMethod,
  route: string,
  data = DEFAULT_DATA,
  headers: HeadersInit = DEFAULT_HEADERS,
  options = DEFAULT_OPTIONS
): Promise<FetchReturns<T>> => {
  try {
    const body = method === 'GET' ? undefined : JSON.stringify(data);
    const res = await window.fetch(
      `${process.env.REACT_APP_API_URL}/${route}`,
      {
        ...options,
        method,
        headers,
        body,
      }
    );
    return res.status >= 200 && res.status < 300
      ? { json: await res.json(), error: null, statusCode: res.status }
      : { json: null, error: res.statusText, statusCode: res.status };
  } catch (err) {
    return { json: null, error: getErrorMessage(err), statusCode: null };
  }
};
