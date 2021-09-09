import { Analyzer, MatchData, OutputTarget } from "./interfaces";
import { WinAnalysis } from "./WinAnalysis";
import { HTMLReport } from "./HTMLReport";

export class Summary {
    static winsAnalysisWithHTMLReport(team: string): Summary {
        return new Summary(
            new WinAnalysis(team),
            new HTMLReport()
        );
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    
    buildAndPrintReport(matches: MatchData[]): void {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }

}