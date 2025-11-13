// 2. 소수 만들기

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const hap = nums[i] + nums[j] + nums[k];

        if (hap < 2) continue;
        let isPrime = true;
        for (let n = 2; n <= Math.sqrt(hap); n++) {
          if (hap % n === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) answer++;
      }
    }
  }

  return answer;
}
