// 3번 이상한 문자 만들기

function solution(s) {
  const newS = s.split(" ");
  for (let i = 0; i < newS.length; i++) {
    newS[i] = newS[i]
      .split("")
      .map((ch, index) =>
        index % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
      )
      .join("");
  }
  return newS.join(" ");
}
