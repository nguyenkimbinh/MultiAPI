"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var basicTables_service_1 = require("../../basicTables.service");
var CondensedTable = (function () {
    function CondensedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.peopleTableData = _basicTablesService.peopleTableData;
    }
    return CondensedTable;
}());
CondensedTable = __decorate([
    core_1.Component({
        selector: 'condensed-table',
        templateUrl: './condensedTable.html'
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], CondensedTable);
exports.CondensedTable = CondensedTable;
//# sourceMappingURL=condensedTable.component.js.map