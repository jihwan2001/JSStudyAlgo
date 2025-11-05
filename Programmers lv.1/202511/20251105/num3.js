// 3번 k번째 수

function solution(array, commands) {
  return commands.map((num) => {
    const [i, j, k] = num;
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });
}
