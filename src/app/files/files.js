var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var fileService_1 = require('../providers/fileService');
var Files = (function () {
    function Files(_fileService) {
        this._fileService = _fileService;
    }
    Files = __decorate([
        core_1.Component({
            selector: 'files',
            template: 'files.html',
            styles: ['files.css'],
            inputs: ['file']
        }), 
        __metadata('design:paramtypes', [fileService_1.FileService])
    ], Files);
    return Files;
})();
exports.Files = Files;
//# sourceMappingURL=files.js.map