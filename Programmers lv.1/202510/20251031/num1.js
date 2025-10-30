// 1번 두 정수 사이의 합

function solution(a, b) {
  let sum = 0;
  let x = 0; // 작은거
  let y = 0; // 큰거
  if (a > b) {
    x = b;
    y = a;
  } else if (a < b) {
    x = a;
    y = b;
  } else {
    x = a;
    return x;
  }
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}
