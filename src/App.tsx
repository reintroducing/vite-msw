import {useState} from 'react';
import {callApi} from './utils';

const App = () => {
  const [data, setData] = useState<string | null>(null);

  return (
    <>
      <button
        id="tour-amateur"
        onClick={() => {
          callApi({
            method: 'GET',
            url: '/tour/leaderboard?difficulty=amateur',
            callback: (data, error, statusCode) => {
              console.log(data, error, statusCode);
              setData(data.data as string);
            },
          });
        }}
      >
        Tour Leaderboard (Amateur)
      </button>
      <button
        id="tour-pro"
        onClick={() => {
          callApi({
            method: 'GET',
            url: '/tour/leaderboard?difficulty=pro',
            callback: (data, error, statusCode) => {
              console.log(data, error, statusCode);
              setData(data.data as string);
            },
          });
        }}
      >
        Tour Leaderboard (Pro)
      </button>
      <button
        id="daily"
        onClick={() => {
          callApi({
            method: 'GET',
            url: '/tour/daily-leaderboard',
            callback: (data, error, statusCode) => {
              console.log(data, error, statusCode);
              setData(data.data as string);
            },
          });
        }}
      >
        Daily Leaderboard
      </button>
      <button
        id="weekly"
        onClick={() => {
          callApi({
            method: 'GET',
            url: '/tour/weekly-leaderboard',
            callback: (data, error, statusCode) => {
              console.log(data, error, statusCode);
              setData(data.data as string);
            },
          });
        }}
      >
        Weekly Leaderboard
      </button>
      <button
        id="event"
        onClick={() => {
          callApi({
            method: 'GET',
            url: '/tour/live-event',
            callback: (data, error, statusCode) => {
              console.log(data, error, statusCode);
              setData(data.data as string);
            },
          });
        }}
      >
        Live Event
      </button>
      <button
        id="post-test"
        onClick={() => {
          callApi({
            method: 'POST',
            url: '/tour/post-test',
            body: {foo: 'foo'},
            callback: (data, error, statusCode) => {
              console.log(data, error, statusCode);
              setData(data.data as string);
            },
          });
        }}
      >
        Post Test
      </button>
      <p id="data">{data}</p>
    </>
  );
};

export default App;
