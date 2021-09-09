import { Analyzer, MatchData } from "./interfaces";
import { MatchResult } from "./MatchResult";

export class WinAnalysis implements Analyzer {
    constructor(public team: string) {}
    
    run(matches: MatchData[]): string {
        let wins = 0;
        
        for (let match of matches) {
            const [, home, away,,, final] = match;
            if(home === this.team && final === MatchResult.HOME) {
                wins++;
            }
            if(away === this.team && final === MatchResult.AWAY) {
                wins++;
            }
        }    
        return `Team ${this.team} had ${wins} wins.`;
    }

}   