import {Component,OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Folder, File} from '../providers/appInterface';
import {Files} from '../files/files';
import {FileService} from '../providers/fileService';


@Component({
  selector: 'folders',
  template: require('./folders.html'),
  styles: [require('./folders.css')],
  directives: [RouterLink],
  providers: [FileService],
  inputs: ['folder']
})

export class Folders implements OnInit {
  public folder: Folder;
  public folders: Folder[];
  
  constructor(private _fileService: FileService) { }

  ngOnInit(){
    this.getFolders();
  }


  getFolders() {
    this._fileService.getFolders().then(folders => this.folders = folders);
  }
}
