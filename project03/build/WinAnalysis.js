"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var MatchResult_1 = require("./MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var home = match[1], away = match[2], final = match[5];
            if (home === this.team && final === MatchResult_1.MatchResult.HOME) {
                wins++;
            }
            if (away === this.team && final === MatchResult_1.MatchResult.AWAY) {
                wins++;
            }
        }
        return "Team " + this.team + " had " + wins + " wins.";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
