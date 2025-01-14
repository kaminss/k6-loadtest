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
  check(res, {
    'status is 200': (r) => r.status === 200,
    'responseMesg is Success': (r) => r.json().responseMesg === 'Success',
    'responseCode is 000': (r) => r.json().responseCode === '000',
  });
  sleep(1);
}