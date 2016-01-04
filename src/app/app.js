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
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var title_1 = require('./providers/title');
var x_large_1 = require('./directives/x-large');
var home_1 = require('./home/home');
var folders_1 = require('./folders/folders');
var files_1 = require('./files/files');
var App = (function () {
    function App(title) {
        this.title = title;
        this.url = 'https://twitter.com/thevivekwisdom';
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: common_1.FORM_PROVIDERS.concat([title_1.Title]),
            directives: router_1.ROUTER_DIRECTIVES.concat([x_large_1.XLarge]),
            pipes: [],
            styles: ['app.css'],
            template: 'app.html'
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, name: 'Home' },
            { path: '/folders', component: folders_1.Folders, name: 'Folders' },
            { path: '/files', component: files_1.Files, name: 'Files' }
        ]), 
        __metadata('design:paramtypes', [title_1.Title])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map