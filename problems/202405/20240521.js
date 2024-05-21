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
}

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const queue = new Queue();
  const bridge = new Queue();
  truck_weights.forEach((truck) => queue.unshift(truck));
  while (queue.length()) {
    let truck = queue.shift();
    if (weight >= truck) {
      weight -= truck;
      bridge.unshift(truck);
      answer++;
      if (!queue.length()) {
        let crossingTime = bridge_length - bridge.length();
        while (bridge.length()) {
          bridge.shift();
          crossingTime++;
        }
        answer += crossingTime;
        break;
      }
      continue;
    } else {
      // weight < truck
      let crossingTime = bridge_length - bridge.length();

      while (bridge.length()) {
        let truck = bridge.shift();
        weight += truck;
        crossingTime++;
      }
      answer += crossingTime;
    }
    bridge.unshift(truck);
    weight -= truck;
    if (!queue.length()) {
      let crossingTime = bridge_length - bridge.length();
      while (bridge.length()) {
        bridge.shift();
        crossingTime++;
      }
      answer += crossingTime;
      break;
    }
  }
  return answer;
}
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
