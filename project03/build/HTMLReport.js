"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
var fs_1 = require("fs");
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (report) {
        var html = "\n            <div>\n                <h1>Analysis Output</h1>\n                <div>" + report + "</div>\n            </div>\n        ";
        fs_1.writeFileSync('report.html', html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
