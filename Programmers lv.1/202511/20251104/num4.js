// 4번 최소직사각형

// 1.
function solution(sizes) {
  var answer = 0;

  //최대값만 모은 배열
  const firstMax = sizes.map((ch, i) => Math.max(...ch));
  const secMax = sizes.map((ch, i) => Math.min(...ch));

  let firstRealMax = 0;
  for (let i = 0; i < firstMax.length; i++) {
    if (firstMax[i] > firstRealMax) firstRealMax = firstMax[i];
  }

  let secRealMax = 0;
  for (let i = 0; i < secMax.length; i++) {
    if (secMax[i] > secRealMax) secRealMax = secMax[i];
  }
  return firstRealMax * secRealMax;
}

// 2
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (h > w ? [h, w] : [w, h]));

  let max = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > max[0]) max[0] = w;
    if (h > max[1]) max[1] = h;
  });
  return max[0] * max[1];
}
