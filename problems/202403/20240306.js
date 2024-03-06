// 전화번호 목록 - 해시 lv-2 -> 해시이긴한데 해시로 풀지않았다
// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  phone_book.sort(); // 전화번호 리스트를 정렬합니다.

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
      return false;
    }
  }

  return true;
}
