import {http, HttpResponse} from 'msw';
import {DEV_BASE_API_URL} from '@/mocks/constants';
import get from './get.json';

export const getLiveEvent = {
  response: get,
  handler: (
    {status = 200, response = getLiveEvent.response} = {
      status: 200,
      response: getLiveEvent.response,
    },
  ) =>
    http.get(`${DEV_BASE_API_URL}/tour/live-event`, () =>
      HttpResponse.json(response, {status}),
    ),
};

export default [getLiveEvent.handler()];
