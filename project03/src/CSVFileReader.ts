import { readFileSync } from "fs";

export class CSVFileReader {
    data: string[][] = [];
    constructor(public filename: string) {}

    read(): void {
        this.data = readFileSync(
            this.filename, 
            { encoding: 'utf-8' }
        )
        .split('\n')
        .map((row: string): string[] => row.split(','));
    }

}