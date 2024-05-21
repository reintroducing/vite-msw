import type {StartOptions} from 'msw/browser';

export const DEV_BASE_API_URL = 'http://localhost:3000/api';

export const START_OPTIONS: StartOptions = {
  quiet: true,
  onUnhandledRequest: (request, print) => {
    if (request.url.toString().startsWith(DEV_BASE_API_URL)) {
      print.error();
    }
  },
};
