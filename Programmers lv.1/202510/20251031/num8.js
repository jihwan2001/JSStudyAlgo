// 8번 핸드폰 번호 가리기

function solution(phone_number) {
  const length = phone_number.length;
  const slicedNum = phone_number.slice(-4);
  const repeat = "*".repeat(length - 4);
  return repeat + slicedNum;
}
