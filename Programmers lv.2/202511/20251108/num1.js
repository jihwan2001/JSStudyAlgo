// 1번 타겟 넘버(dfs)

function solution(numbers, target) {
  var answer = 0;
  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
    console.log("index:", index, "sum:", sum);
  };
  dfs(0, 0);
  return answer;
}
