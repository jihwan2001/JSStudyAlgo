const n = 5;
const k = 160;
const nums = [1, 5, 10, 50, 100];

function solution(k, nums) {
  let used = 0;
  const result = [];
  nums.sort((a, b) => b - a);
  nums.forEach((num) => {
    if (k >= num) {
      const count = Math.floor(k / num);
      k -= count * num;
      result.push(count);
      used++;
      console.log(`${num} 원 : ${count} 개`);
    } else {
      result.push(0);
    }
  });
  return result.reverse();
}

solution(k, nums);
