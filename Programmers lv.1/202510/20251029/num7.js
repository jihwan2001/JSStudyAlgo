// 7번 문자열을 정수로 바꾸기

function solution(s) {
  if (s[0] === "-") {
    return -Number(s.replace("-", ""));
  } else {
    return Number(s);
  }
}
