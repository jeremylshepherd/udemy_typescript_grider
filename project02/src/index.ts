import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const nums = new NumbersCollection([8, 2, 7, 6, 4, 2]);
const chars = new CharactersCollection('zaTcFd');
nums.sort();
chars.sort();
console.log(nums.data);
console.log(chars);

const linkedList = new LinkedList();

linkedList.add(5);
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.print();

linkedList.sort();

console.log('Now sorted');

linkedList.print();