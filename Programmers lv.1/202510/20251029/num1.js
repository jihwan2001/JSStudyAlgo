// 자릿수 더하기

function solution(n) {
  let sum = 0;
  const arr = n.toString().split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
