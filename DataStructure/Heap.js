function Heap() { //최소힙 구현
  this.heap = [ null ]; //부모, 자식 인덱스 계산 편이를 위해 첫 원소를 비워두고 인덱스 1을 root로 둠

  this.size = () => {
    return this.heap.length - 1; //첫 원소 제외
  };

  this.getMin = () => {
    return this.heap[1] ? this.heap[1] : null;
  };

  this.swap = (a, b) => {
    [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
  };

  this.heappush = (n) => {
    this.heap.push(n);
    let idx = this.heap.length - 1;
    while(true) {
      if(idx === 1) break; //push한 값이 root에 도달할 경우 멈춤
      let parent = Math.floor(idx / 2);
      if(n < this.heap[parent]) {
        this.swap(idx, parent);
        idx = parent;
      }
      else break;
    }
  };

  this.heappop = () => {
    if(!this.heap[1]) return null; //heap이 비어있을 경우
    const min = this.heap[1];
    this.heap.length <= 2 ? this.heap = [ null ] : this.heap[1] = this.heap.pop();
    let idx = 1;
    while(true) {
      let leftChild = idx * 2;
      let rightChild = idx * 2 + 1;
      if(!this.heap[leftChild]) break; //heap은 완전이진트리이기 때문에 왼쪽 자식이 없으면 오른쪽 자식도 없음
      if(!this.heap[rightChild]) {
        if(this.heap[idx] > this.heap[leftChild]) {
          this.swap(idx, leftChild);
          break;
        }
      }
      if(this.heap[idx] > this.heap[leftChild] || this.heap[idx] > this.heap[rightChild]) {
        let minIdx = this.heap[leftChild] > this.heap[rightChild] ? rightChild : leftChild;
        this.swap(idx, minIdx);
        idx = minIdx;
      }
    }
    return min;
  };
}