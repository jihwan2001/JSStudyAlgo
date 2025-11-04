// 6번 시저 암호

function solution(s, n) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();

  return s
    .split("")
    .map((ch) => {
      if (ch === " ") return " ";
      if (ch !== ch.toUpperCase()) {
        const index = lower.indexOf(ch);
        return lower[(index + n) % 26];
      } else {
        const index = upper.indexOf(ch);
        return upper[(index + n) % 26];
      }
    })
    .join("");
}
