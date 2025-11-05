// 2번 숫자 문자열과 영단어

function solution(s) {
  var answer = 0;
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numbers.forEach((ch, i) => {
    s = s.replaceAll(ch, i);
  });
  return Number(s);
}
