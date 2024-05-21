import {http, HttpResponse} from 'msw';
import {DEV_BASE_API_URL} from '@/mocks/constants';
import get from './get.json';

export const getDailyLeaderboard = {
  response: get,
  handler: (
    {status = 200, response = getDailyLeaderboard.response} = {
      status: 200,
      response: getDailyLeaderboard.response,
    },
  ) =>
    http.get(`${DEV_BASE_API_URL}/tour/daily-leaderboard`, () =>
      HttpResponse.json(response, {status}),
    ),
};

export default [getDailyLeaderboard.handler()];
