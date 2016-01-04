import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

import {FileService} from '../providers/fileService';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES,RouterLink],
  providers: [FileService],
  pipes: [],
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  // TypeScript public modifiers
  public title: string = 'Welcome to angular 2.0 POC';
  public subtitle: string = 'This is a POC for angular 2.0, please click below for Folder List.';
   
  constructor(public http: Http) {
  }

  ngOnInit() {
    console.log('hello Home');
  }

}
