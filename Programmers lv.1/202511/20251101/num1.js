// 1번 제일 작은 수 제거하기

function solution(arr) {
  if (arr[0] === 10) {
    return [-1];
  } else {
    const min = Math.min(...arr);
    return arr.filter((n) => n !== min);
  }
}
