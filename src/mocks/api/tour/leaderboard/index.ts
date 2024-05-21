import {http, HttpResponse} from 'msw';
import {DEV_BASE_API_URL} from '@/mocks/constants';
import getAmateur from './get-amateur.json';
import getPro from './get-pro.json';

const DIFFICULTIES = {
  amateur: getAmateur,
  pro: getPro,
};

export const getTourLeaderboard = {
  response: getPro,
  handler: ({status = 200} = {status: 200}) =>
    http.get(`${DEV_BASE_API_URL}/tour/leaderboard`, ({request}) => {
      const url = new URL(request.url);
      const difficulty = url.searchParams.get('difficulty');

      return HttpResponse.json(DIFFICULTIES[difficulty], {status});
    }),
};

export default [getTourLeaderboard.handler()];
