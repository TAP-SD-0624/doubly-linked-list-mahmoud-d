class DoublyNode {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    if (this.head === null) {
      this.head = this.tail = new DoublyNode(val);
    } else {
      let newNode = new DoublyNode(val);
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      console.log("The linked list is empty!!");
      return;
    }
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.size--;
  }

  shift() {
    if (this.size === 0) {
      console.log("The linked list is empty!!");
      return;
    }
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }
    this.size--;
  }

  unshift(val) {
    let newNode = new DoublyNode(val);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of range");
      return;
    }
    let current;
    if (index < this.size / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        current = current.previous;
      }
    }
    return current.data;
  }

  set(index, val) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of range");
      return;
    }
    let current;
    if (index < this.size / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        current = current.previous;
      }
    }
    current.data = val;
  }

  insert(index, val) {
    if (index < 0 || index > this.size) {
      return false;
    }
    let newNode = new DoublyNode(val);
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.size) {
      this.push(val);
    } else {
      let current;
      if (index < this.size / 2) {
        current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.size - 1; i >= index; i--) {
          current = current.previous;
        }
      }
      newNode.next = current.next;
      newNode.previous = current;
      current.next.previous = newNode;
      current.next = newNode;
      this.size++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return false;
    }
    let current;
    if (index === 0) {
      this.shift();
    } else if (index === this.size - 1) {
      this.pop();
    } else {
      if (index < this.size / 2) {
        current = this.head;
        for (let i = 0; i < index; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.size - 1; i > index; i--) {
          current = current.previous;
        }
      }
      current.previous.next = current.next;
      current.next.previous = current.previous;
      this.size--;
    }
    return true;
  }
  //print list data
  printData() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
export { DoublyLinkedList };
