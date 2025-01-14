import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 400 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 600 },
    { duration: '1m', target: 700 },
    { duration: '1m', target: 800 },
    { duration: '1m', target: 900 },
    { duration: '1m', target: 1000 },
    { duration: '20m', target: 1000 },
    { duration: '2m', target: 0 }
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