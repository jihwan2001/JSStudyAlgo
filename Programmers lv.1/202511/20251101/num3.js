// 3번 수박수박수박수?

function solution(n) {
  var answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}
