import { MatchResult } from "./MatchResult";

export interface DataReader {
    read(): void;
    data: string[][];
}

export type MatchData = [date: Date, home: string, away: string, homeGoals: number, awayGoals: number, final: MatchResult, referee: string];

export interface Analyzer {
    run(matches: MatchData[]): string;    
}

export interface OutputTarget {
    print(report: string): void;
}