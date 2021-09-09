import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { ConsoleReport } from './ConsoleReport';
import { HTMLReport } from './HTMLReport';
import { WinAnalysis } from './WinAnalysis';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHTMLReport('Man United');

summary.buildAndPrintReport(matchReader.matches);