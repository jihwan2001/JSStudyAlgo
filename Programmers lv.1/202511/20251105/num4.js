// 4번 콜라문제

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const newBottles = Math.floor(n / a) * b;
    const rest = n % a;
    n = newBottles + rest;
    answer += newBottles;
  }
  return answer;
}
