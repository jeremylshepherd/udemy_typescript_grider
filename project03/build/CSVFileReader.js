"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
var fs_1 = require("fs");
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs_1.readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) { return row.split(','); });
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
