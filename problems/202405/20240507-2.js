// 주차 요금 계산 - 2022 kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/92341

const calculateParkingPrice = (fees, totalMinute) => {
  // fees
  // ex. [180, 5000, 10, 600]
  // -> [기본시간, 기본시간당 요금, 초과분, 초과분당 요금]
  let [baseTime, basePrice, perMinute, pricePerMinute] = fees;
  let price = basePrice;
  if (totalMinute > baseTime) {
    price =
      basePrice +
      Math.ceil((totalMinute - baseTime) / perMinute) * pricePerMinute;
  }

  return price;
};

function solution(fees, records) {
  // fees
  // ex. [180, 5000, 10, 600]
  // -> [기본시간, 기본시간당 요금, 초과분, 초과분당 요금]
  // records -> 길이는 1000 이하
  // ex. ["05:34 5961 IN", "07:34 5961 OUT"]

  // 차 번호 순으로 내림차순
  let answer = []; // 차량번호가 작은 자동차부터 주차요금
  let ordinalRecords = records.sort((a, b) => {
    let aCarNumber = Number(a.split(" ")[1]);
    let bCarNumber = Number(b.split(" ")[1]);
    return bCarNumber - aCarNumber;
  });
  ordinalRecords = ordinalRecords.map((str) => str.split(" "));
  console.log(ordinalRecords);
  while (ordinalRecords.length) {
    //..
    let parkingPrice = 0;
    let curCarNumber = ordinalRecords[ordinalRecords.length - 1][1]; // 배열의 마지막 원소의 차 넘버를 지정
    let sameCarRecord = []; // 동일한 차량을 담을 배열 초기화

    while (
      ordinalRecords.length &&
      curCarNumber === ordinalRecords[ordinalRecords.length - 1][1]
    ) {
      sameCarRecord.push(ordinalRecords.pop());
    }
    // sameCarRecode에 같은 차량의 번호를 가진 기록만 담긴다.
    let totalMinute = 0;
    while (sameCarRecord.length) {
      if (sameCarRecord.length === 1) {
        // 출차 기록이 없는 경우
        let inTime = sameCarRecord.pop()[0];
        let [inTimeHoures, inTimeMinute] = inTime.split(":");
        let remainHours = 23 - Number(inTimeHoures);
        let remainMinute = 59 - Number(inTimeMinute);
        totalMinute += remainHours * 60 + remainMinute;
      } else {
        // 출차 기록이 있는 경우
        let inTime = sameCarRecord.pop()[0];
        let outTime = sameCarRecord.pop()[0];
        let [inTimeHours, inTimeMinute] = inTime.split(":");
        let [outTimeHours, outTimeMinute] = outTime.split(":");
        let remainHours = Number(outTimeHours) - Number(inTimeHours);
        let remainMinute = Number(outTimeMinute) - Number(inTimeMinute);
        if (remainMinute < 0) {
          remainHours -= 1;
          remainMinute += 60;
        }
        totalMinute += remainHours * 60 + remainMinute;
      }
    }
    parkingPrice = calculateParkingPrice(fees, totalMinute);
    answer.push(parkingPrice); // 가격을 집어 넣는다
  }
  return answer;
}

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);
