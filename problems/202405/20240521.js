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
  let queue = new Queue();
  let bridge = new Queue();
  let bridgeTrigger = 0;
  truck_weights.forEach((truck) => queue.unshift(truck));
  while (queue.length() || bridge.length()) {
    time++;
    if (queue.peek() <= weight && bridgeTrigger < bridge_length) {
      let truck = queue.shift();
      bridge.unshift(truck);
      bridgeTrigger++;
      weight -= truck;
      continue;
    }
    if (queue.peek() > weight && bridgeTrigger < bridge_length) {
      bridgeTrigger++;
      continue;
    }
    if (queue.peek() > weight && bridgeTrigger === bridge_length) {
      let outTruck = bridge.shift();
      weight += outTruck;
      bridgeTrigger--;
      if (queue.length() && queue.peek() <= weight) {
        let newTruck = queue.shift();
        bridge.unshift(newTruck);
        weight -= newTruck;
        bridgeTrigger++;
      }
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
