// 4번 예산

function solution(d, budget) {
  let sum = 0;
  let result = 0;
  d = d.sort((a, b) => a - b);
  d.map((n, i) => {
    sum += n;
    if (sum <= budget) result++;
  });
  return result;
}
