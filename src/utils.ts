import {DEV_BASE_API_URL} from './mocks/constants';

type Callback = (
  data: unknown | null,
  error: unknown | null,
  statusCode: number,
) => void;

export function callApi({
  method,
  url,
  body,
  callback,
}: {
  method: 'GET' | 'POST';
  url: string;
  body?: Record<string, unknown>;
  callback: Callback;
}) {
  return (
    fetch(`${DEV_BASE_API_URL}${url}`, {
      method,
      ...(body && {body: JSON.stringify(body)}),
    })
      .then(resp =>
        resp.json().then(data => ({body: data, statusCode: resp.status})),
      )
      // we know that the response is an object, so we can safely cast it to any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then(({body, statusCode}: {body: any; statusCode: number}) => {
        // response is an error object that has an errorCode, set the callback params accordingly
        if (body.errorCode) {
          return callback(null, body, statusCode);
        }

        return callback(body, null, statusCode);
      })
  );
}
