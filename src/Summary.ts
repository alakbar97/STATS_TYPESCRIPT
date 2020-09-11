import { HtmlReport } from './reporterTargets/HtmlReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

    static winAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinAnalysis(team),
            new HtmlReport()
        );
    }

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}