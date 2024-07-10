const calculator = (principal, day, leverage) => {
  let winFlg = null;
  const chargeRate = leverage * 0.02 + leverage * 0.05; // 지정가 진입 + 시장가 청산
  let money = principal;
  console.log(chargeRate);
  while (day > 0) {
    if (Math.random() < 0.9) {
      // 졌다
      winFlg = false;
    } else {
      winFlg = true;
    }
    if (winFlg) {
      money += money * 1.01;
    } else {
      money -= money * 1.01;
    }
    money -= money * chargeRate;
    console.log(`${day} day에서 money ? ${money}`);
    day--;
  }
  console.log(money);
};

console.log(calculator(131, 10, 3));
