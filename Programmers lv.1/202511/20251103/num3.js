// 3번 크기가 작은 부분 문자열

function solution(t, p) {
  var answer = [];
  let result = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    answer.push(t.slice(i, i + p.length));
  }
  answer.map((n, i) => {
    if (n <= p) result++;
  });
  return result;
}
