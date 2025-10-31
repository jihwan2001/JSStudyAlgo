// 5번 나누어 떨어지는 숫자 배열

// 1.
function solution(arr, divisor) {
  var answer = [];
  arr.map((n) => {
    if (n % divisor === 0) answer.push(n);
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

2;
function solution(arr, divisor) {
  const answer = arr.filter((n) => n % divisor === 0).sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}
