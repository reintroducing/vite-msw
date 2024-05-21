import {http, HttpResponse} from 'msw';
import {DEV_BASE_API_URL} from '@/mocks/constants';
import post from './post.json';

export const postTest = {
  response: post,
  handler: (
    {status = 200, response = postTest.response} = {
      status: 200,
      response: postTest.response,
    },
  ) =>
    http.post(`${DEV_BASE_API_URL}/tour/post-test`, () =>
      HttpResponse.json(response, {status}),
    ),
  // http.post(`${DEV_BASE_API_URL}/tour/post-test`, async ({request}) => {
  //   const body = await request.formData();

  //   console.log(body.get('foo'));

  //   return HttpResponse.json(response, {status});
  // }),
};

export default [postTest.handler()];
