// 4번 기사단원의 무기

function solution(number, limit, power) {
  const divisor = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count += j === i / j ? 1 : 2;
      }
    }

    divisor.push(count > limit ? power : count);
  }

  return divisor.reduce((sum, cur) => sum + cur, 0);
}
