// 3번 폰켓몬

function solution(nums) {
  var answer = 0;
  const pick = nums.length / 2;
  const setLength = [...new Set(nums)].length;
  return pick > setLength ? setLength : pick;
}
