import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    }

    swap(leftIdx: number, rightIdx: number): void {
        const charArray = this.data.split('');
        let leftHand = charArray[leftIdx];
        charArray[leftIdx] = charArray[rightIdx];
        charArray[rightIdx] = leftHand;
        this.data = charArray.join('');
    }
}