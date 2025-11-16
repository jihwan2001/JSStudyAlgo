// 2번 둘만의 암호

function solution(s, skip, index) {
  var answer = "";
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // skip 문자 제거
  for (let i = 0; i < skip.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j] === skip[i]) {
        alphabet.splice(j, 1);
        j--;
      }
    }
  }
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    let idx = alphabet.indexOf(sArr[i]);
    let newIdx = (idx + index) % alphabet.length;
    answer += alphabet[newIdx];
  }

  return answer;
}
