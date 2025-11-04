// 5번 가장 가까운 같은 글자

function solution(s) {
  const seen = [];
  const result = [];
  s.split("").forEach((ch, i) => {
    if (seen.includes(ch)) {
      let lastCh = seen.lastIndexOf(ch);
      result.push(i - lastCh);
    } else {
      result.push(-1);
    }
    seen.push(ch);
  });
  return result;
}
