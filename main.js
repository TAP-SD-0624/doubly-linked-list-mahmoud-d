import { DoublyLinkedList } from "./DoublyLinkedList.js";
// Test cases
let list = new DoublyLinkedList();

// Test push
console.log(`---------------- Test push`);
list.push(1);
list.push(2);
list.push(3);
list.printData(); // List should be 1 -> 2 -> 3

// Test pop
console.log(`---------------- Test pop`);
list.pop();
list.printData(); // List should be 1 -> 2

// Test shift
console.log(`---------------- Test shift`);
list.shift();
list.printData(); // List should be 2

// Test unshift
console.log(`---------------- Test unshift`);
list.unshift(1);
list.printData(); // List should be 1 -> 2

// Test get
console.log(`---------------- Test get`);
console.log(list.get(0)); // Should return 1
console.log(list.get(1)); // Should return 2

// Test set
console.log(`---------------- Test set`);
list.set(1, 3);
console.log(list.get(1)); // Should return 3

// Test insert
console.log(`---------------- Test insert`);
list.insert(1, 2);
console.log(list.get(1)); // Should return 2

// Test remove
console.log(`---------------- Test remove`);
list.remove(1);
console.log(list.get(1)); // Should return 3
