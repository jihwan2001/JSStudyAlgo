// 1번 같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
