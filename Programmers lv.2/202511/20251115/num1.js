// 1번 소수 찾기

// 1.
function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime === true) answer++;
  }

  return answer;
}

// 2.
function solution(n) {
  var answer = 0;
  const arr = new Array(n + 1).fill(true);

  arr[0] = arr[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i]) answer++;
  }

  return answer;
}
