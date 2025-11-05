// 1번 푸드 파이트 대회

function solution(food) {
  var answer = "";
  const newFood = [1];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 === 1) {
      newFood.push((food[i] - 1) / 2);
    } else {
      newFood.push(food[i] / 2);
    }
  }

  newFood.forEach((num, i) => {
    if (i == 0) return;
    answer += String(i).repeat(num);
  });
  return answer + "0" + answer.split("").reverse().join("");
}
