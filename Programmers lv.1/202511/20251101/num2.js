// 2번 내적

// 1.

function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

// 2.
function solution(a, b) {
  return a.reduce((acc, val, i) => acc + val * b[i], 0);
}
