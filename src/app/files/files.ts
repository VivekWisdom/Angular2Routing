import {Component, OnInit} from 'angular2/core';
import {RouterLink, RouteParams} from 'angular2/router';
import {File} from '../providers/appInterface';
import {Folder} from '../providers/appInterface';
import {FileService} from '../providers/fileService';

@Component({
  selector: 'files',
  template: require('./files.html'),
  styles: [require('./files.css')],
  directives:[RouterLink],
  providers:[FileService],
  inputs: ['file']
})

export class Files {
  public file: File;
  public files: File[];
  public folderName: string;
  constructor(params: RouteParams,private _fileService: FileService) {
    this.folderName = params.get('folder');

    this.getFilesOf(this.folderName);
   }

   getFilesOf(folderName) {
	  this.files=this._fileService.getFilesOf(folderName);
	}
  
}
