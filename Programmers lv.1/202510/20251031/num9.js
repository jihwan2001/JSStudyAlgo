// 9번 가운데 글자 가져오기

function solution(s) {
  var answer = [];
  if (s.length % 2 === 0) {
    let sliced = s.length / 2;
    answer.push(s[sliced - 1]);
    answer.push(s[sliced]);
  } else {
    let sliced = s.length / 2 - 0.5;
    answer.push(s[sliced]);
  }
  return answer.join("");
}
