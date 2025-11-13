// 1. 과일 장수

function solution(k, m, score) {
  const l = score.length;
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < l; i += m) {
    const box = score.slice(i, i + m);
    if (box.length < m) break;
    answer += box[box.length - 1] * m;
  }
  return answer;
}
