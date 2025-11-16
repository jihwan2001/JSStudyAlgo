// 1번 옹알이(2)

function solution(babbling) {
  var answer = 0;
  const sound = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];
    for (let j = 0; j < sound.length; j++) {
      if (babble.includes(sound[j].repeat(2))) break;
      babble = babble.split(sound[j]).join(" ");
      console.log(babble);
    }
    if (babble.split(" ").join("").length === 0) answer++;
  }
  return answer;
}
