"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var HtmlReport_1 = require("./reporterTargets/HtmlReport");
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
