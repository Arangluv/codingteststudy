// 더 맵게 (min - Heap)
// https://school.programmers.co.kr/learn/courses/30/lessons/42626

// heap 처음부터 작성

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    // 최소 힙이기 때문에 0번째 index가 가장 작다
    return this.heap[0];
  }

  push(value) {
    // 값을 먼저 push
    this.heap.push(value);
    // push한 값이 들어있는 마지막 index
    let curIndex = this.heap.length - 1;
    while (
      curIndex > 0 &&
      this.heap[curIndex] < this.heap[Math.floor((curIndex - 1) / 2)]
    ) {
      let temp = this.heap[curIndex];
      this.heap[curIndex] = this.heap[Math.floor((curIndex - 1) / 2)];
      this.heap[Math.floor((curIndex - 1) / 2)] = temp;
      curIndex = Math.floor((curIndex - 1) / 2);
    }
  }

  pop() {
    // stack의 앞에서 꺼낸다
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    let minValue = this.heap[0];

    let popedValue = this.heap.pop();
    this.heap[0] = popedValue;
    let curIndex = 0;

    // left leaf node가 있을때까지
    while (curIndex * 2 + 1 < this.heap.length) {
      let minIndex = -1;
      // while 반복문이 돈다면 left node가 반드시 있다
      // right node가 없으면 자동으로 left node index번호를 자동으로 초기화

      if (curIndex * 2 + 2 >= this.heap.length) {
        minIndex = curIndex * 2 + 1;
      } else {
        // 그게 아니라면 더 작은 값이 있는 index 번호를 할당해준다
        minIndex =
          this.heap[curIndex * 2 + 1] > this.heap[curIndex * 2 + 2]
            ? curIndex * 2 + 2
            : curIndex * 2 + 1;
      }
      if (this.heap[curIndex] < this.heap[minIndex]) {
        break;
      }
      let temp = this.heap[curIndex];
      this.heap[curIndex] = this.heap[minIndex];
      this.heap[minIndex] = temp;

      curIndex = minIndex;
    }
    return minValue;
  }
}

// solution
function solution(scoville, K) {
  let mixCount = 0;
  let heap = new MinHeap();
  scoville.forEach((item) => heap.push(item));
  while (heap.size() >= 2 && heap.peek() < K) {
    let first = heap.pop();
    let second = heap.pop();

    let mixed = first + second * 2;
    heap.push(mixed);
    mixCount++;
  }
  return heap.peek() >= K ? mixCount : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
