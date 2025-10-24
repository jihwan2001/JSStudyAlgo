// 8번 분수의 덧셈

const solution = (a, b, c, d) => {
  let son = a * d + c * b;
  let mom = b * d;
  var answer = [];

  const gcd = (x, y) => {
    while (y != 0) {
      let z = x % y;
      x = y;
      y = z;
    }
    return x;
  };
  let g = gcd(son, mom);
  son /= g;
  mom /= g;
  answer.push(son, mom);

  return answer;
};
