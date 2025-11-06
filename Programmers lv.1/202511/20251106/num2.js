// 2번 카드 뭉치

function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;
  for (let word of goal) {
    if (i < cards1.length && word === cards1[i]) {
      console.log(`cards1에서 ${word} 사용`);
      i++;
    } else if (j < cards2.length && word === cards2[j]) {
      console.log(`cards2에서 ${word} 사용`);
      j++;
    } else {
      console.log(`${word} cards에서 사용 불가`);
      return "No";
    }
  }
  return "Yes";
}
