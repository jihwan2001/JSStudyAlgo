// 7번 콜라츠 추측

function solution(num) {
  let answer = 0;
  while (num !== 1 && answer < 500) {
    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
    if (num === 1) break;
  }
  return answer === 500 ? -1 : answer;
}
