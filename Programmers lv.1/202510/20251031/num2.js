// 2번 문자열 내 p와 y의 개수

// 1
function solution(s) {
  let p = 0;
  let y = 0;
  const newS = s.split("");
  for (let i = 0; i < newS.length; i++) {
    if (newS[i] === "p" || newS[i] === "P") {
      p++;
    } else if (newS[i] === "y" || newS[i] === "Y") {
      y++;
    }
  }

  return p === y;
}

// 2
function solution(s) {
  s = s.toLowerCase();
  return s.split("p").length === s.split("y").length;
}
