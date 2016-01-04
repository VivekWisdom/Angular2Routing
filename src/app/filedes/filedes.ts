import {Component, OnInit} from 'angular2/core';
import {RouterLink, RouteParams} from 'angular2/router';
import {File} from '../providers/appInterface';
import {FileService} from '../providers/fileService';

@Component({
  selector: 'filedes',
  template: require('./filedes.html'),
  styles: [require('./filedes.css')],
  directives: [RouterLink],
  providers:[FileService]
})

export class FileDescription {
  public file: File;
  public files: File[];
  public fileName: string;
  public folderName: string;
  public description: string;

  constructor(public params: RouteParams,private _fileService: FileService) {
    this.fileName = params.get('file');
    this.folderName = params.get('folder');
    this.getFile(this.folderName,this.fileName);
   }
   getFile(folderName,fileName) {
     this.file=this._fileService.getFile(folderName,fileName);
	}
}
