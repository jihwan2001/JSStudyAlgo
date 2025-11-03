// 2번 최대공약수와 최소공배수

function solution(n, m) {
  var answer = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  let gcd = 1;
  let lcm = 0;
  for (let i = 2; i <= min; i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }
  lcm = (min * max) / gcd;
  return [gcd, lcm];
}
