import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '10s', target: 10 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {

  const res = http.get('LOADTEST_ENDPOINT');
  check(res, { 'status was 200': (r) => r.status == 200,
   });
  sleep(1);
}