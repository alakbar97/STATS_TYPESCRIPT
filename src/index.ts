import { HtmlReport } from './reporterTargets/HtmlReport';
import { ConsoleReport } from './reporterTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { Summary } from './Summary';
import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();

//const summary = Summary.winAnalysisWithHtmlReport("Arsenal");


const summary = new Summary(
    new WinAnalysis('Man City'),
    new ConsoleReport()
);

summary.buildAndPrintReport(reader.data);

