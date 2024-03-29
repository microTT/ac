/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class MinChunk {
  data = [null]

  get size() {
    return this.data.length - 1;
  }

  parent (i) {
    return Math.floor(i / 2);
  }

  leftChild (i) {
    return i * 2;
  }

  rightChild(i) {
    return i * 2 + 1;
  }

  swap (i, j) {
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }

  isLess (i, j) {
    return this.data[i] < this.data[j];
  }

  swim (i) {
    let parent = this.parent(i);
    while (parent) {
      if (this.isLess(parent, i)) {
        this.swap(parent, i);
        i = parent;
        parent = this.parent(i);
      } else {
        break;
      }
    }
  }

  sink (i) {
    let leftChild = this.leftChild(i);
    while (leftChild <= this.size) {
      let minChild = this.leftChild(i);
      let right = this.rightChild(i);
      if (right <= this.size && this.isLess(right, minChild)) {
        minChild = right;
      }
      if (this.isLess(minChild, i)) {
        this.swap(minChild, i);
        i = minChild;
        leftChild = this.leftChild(i);
      } else {
        break;
      }
    }
  }

  insert (value) {
    this.data.push(value);
    this.swap(1, this.size);
    this.sink(1);
  }

  popMin () {
    this.swap(1, this.size);
    const min = this.data.pop();
    this.sink(1);
    return min;
    
  }
}


function getUrgly(n) {
  const factor = [1, 3, 5];
  if (n === 1) {
    return 1;
  }

  let data = new Set();
  while(data.size < ) {
    
  }
}