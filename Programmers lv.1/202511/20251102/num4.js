// 4번 행렬의 덧셈

function solution(arr1, arr2) {
  const answer = arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));
  return answer;
}
