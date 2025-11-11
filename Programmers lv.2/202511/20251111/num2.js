// 2번 덧칠하기

function solution(n, m, section) {
  var answer = 0;
  let lastpainted = 0;
  for (let i = 0; i < section.length; i++) {
    if (section[i] > lastpainted) {
      answer++;
      lastpainted = section[i] + m - 1;
    }
  }
  return answer;
}
