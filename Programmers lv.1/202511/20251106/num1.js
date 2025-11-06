// 1번 명예의 전당(1)

function solution(k, score) {
  let arr = [];
  let answer = [];
  score.forEach((num, i) => {
    arr.push(num);
    arr.sort((a, b) => b - a);
    if (arr.length < k) {
      answer.push(arr[arr.length - 1]);
      // answer.push([...arr].pop());
    } else {
      answer.push(arr[k - 1]);
    }
  });
  return answer;
}
