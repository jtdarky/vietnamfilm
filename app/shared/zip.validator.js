"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
function validateZip(c) {
    var ZIP_REGEXP = new RegExp('[A-Za-z]{5}');
    return ZIP_REGEXP.test(c.value) ? null : {
        validateZip: {
            valid: false
        }
    };
}
exports.validateZip = validateZip;
var ZipValidator = /** @class */ (function () {
    function ZipValidator() {
        this.validator = validateZip;
    }
    ZipValidator_1 = ZipValidator;
    ZipValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    ZipValidator = ZipValidator_1 = __decorate([
        core_1.Directive({
            selector: '[validateZip][ngModel],[validateZip][formControl]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return ZipValidator_1; }), multi: true }
            ]
        })
    ], ZipValidator);
    return ZipValidator;
    var ZipValidator_1;
}());
exports.ZipValidator = ZipValidator;
//# sourceMappingURL=zip.validator.js.map