import {http, HttpResponse} from 'msw';
import {DEV_BASE_API_URL} from '@/mocks/constants';
import get from './get.json';

export const getWeeklyLeaderboard = {
  response: get,
  handler: (
    {status = 200, response = getWeeklyLeaderboard.response} = {
      status: 200,
      response: getWeeklyLeaderboard.response,
    },
  ) =>
    http.get(`${DEV_BASE_API_URL}/tour/weekly-leaderboard`, () =>
      HttpResponse.json(response, {status}),
    ),
};

export default [getWeeklyLeaderboard.handler()];
