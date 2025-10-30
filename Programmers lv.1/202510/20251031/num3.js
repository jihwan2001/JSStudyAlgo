// 3번 음양 더하기

function solution(absolutes, signs) {
  let arr = [];
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      arr.push(absolutes[i] * -1);
    } else {
      arr.push(absolutes[i]);
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
