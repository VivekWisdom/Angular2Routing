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
var files_1 = require('../files/files');
var fileService_1 = require('../providers/fileService');
var Folders = (function () {
    function Folders(_fileService) {
        this._fileService = _fileService;
    }
    Folders.prototype.getFiles = function () {
        var _this = this;
        this._fileService.getFiles().then(function (files) { return _this.files = files; });
    };
    Folders.prototype.onSelectFile = function (file) {
        this.selectedFile = file;
    };
    Folders.prototype.goToFiles = function () {
        this.getFiles();
    };
    Folders = __decorate([
        core_1.Component({
            selector: 'folders',
            template: 'folders.html',
            styles: ['folders.css'],
            directives: [files_1.Files],
            providers: [fileService_1.FileService],
            inputs: ['folder']
        }), 
        __metadata('design:paramtypes', [fileService_1.FileService])
    ], Folders);
    return Folders;
})();
exports.Folders = Folders;
//# sourceMappingURL=folders.js.map