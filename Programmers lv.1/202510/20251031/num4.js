// 4번 없는 숫자 더하기

// 1
function solution(numbers) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = 0;

  return num
    .filter((no) => !numbers.includes(no))
    .map((n) => (sum += n))
    .pop();
}

// 2
function solution(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return 45 - sum;
}
