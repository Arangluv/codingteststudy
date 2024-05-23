// 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.size = 0;
  }
  length() {
    return this.size;
  }
  unshift(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.size++;
  }
  shift() {
    if (!this.head) {
      return null;
    }
    const data = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.rear = null;
    }
    return data;
  }
  peek() {
    if (!this.head) {
      return Infinity;
    }
    return this.head.value;
  }
}

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let queue = [[0, 0]]; // [weight, outOftime]
  let sum = 0;
  let truckArr = truck_weights.reverse();
  // 대기하는 트럭이나, 다리를 건너는 트럭이 모두 0일때까지
  while (queue.length !== 0 || truckArr.length) {
    if (queue[0][1] === time) {
      sum -= queue.shift()[0];
    }
    if (sum + truckArr[truckArr.length - 1] <= weight) {
      sum += truckArr[truckArr.length - 1];
      queue.push([truckArr.pop(), time + bridge_length]);
    } else {
      if (queue[0]) {
        time = queue[0][1] - 1;
      }
    }
    time++;
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
