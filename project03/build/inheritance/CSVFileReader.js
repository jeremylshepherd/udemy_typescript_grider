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
        var _this = this;
        this.data = fs_1.readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(function (row) { return row.split(','); })
            .map(function (row) { return _this.mapRow(row); });
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
