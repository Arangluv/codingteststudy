// 최소 힙

class MinHeap {
  constructor() {
    // 힙 배열 초기화
    this.heap = [];
  }

  size() {
    // 힙 원소 개수 return
    return this.heap.size();
  }

  peek() {
    // heap의 root node value return
    return this.heap[0];
  }
  // 값을 오름차순 정렬
  push(element) {
    this.heap.push(element);
    let curIndex = this.heap.length - 1;
    while (
      curIndex > 0 &&
      this.heap[curIndex] < this.heap[Math.floor((curIndex - 1) / 2)]
    ) {
      // this.heap[Math.floor((curIndex - 1) / 2)]는 heap[curIndex]의 부모노드 value이다
      const temp = this.heap[curIndex];
      this.heap[curIndex] = this.heap[Math.floor((curIndex - 1) / 2)];
      this.heap[Math.floor((curIndex - 1) / 2)] = temp;
      curIndex = Math.floor((curIndex - 1) / 2);
    }
  }
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0]; // head의 value가 가장 작다
    this.heap[0] = this.heap.pop();
    let curIndex = 0;

    while (curIndex * 2 + 1 < this.heap.length) {
      // curIndex * 2 + 1 === left node
      // curIndex * 2 + 2 === right node
      // 아래는 왼쪽 오른쪽 노드 중 더 작은 노드의 index 번호를 찾는 과정
      // 첫번째로 검사해줘야할 것은 자식의 오른쪽 노드가 range를 벗어나는가에 대한 검사
      let minChildIndex =
        curIndex * 2 + 2 < this.heap.length &&
        this.heap[curIndex * 2 + 2] < this.heap[cur * 2 + 1]
          ? curIndex * 2 + 2
          : curIndex * 2 + 1;
      if (this.heap[curIndex] < this.heap[minChildIndex]) {
        // 더 작은 값이 담긴 child index를 찾았다면
        break;
      }
      //
      const temp = this.heap[curIndex];
      this.heap[curIndex] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      curIndex = minChildIndex;
    }
    return minValue;
  }
}
