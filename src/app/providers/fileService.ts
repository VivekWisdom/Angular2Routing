import {Injectable} from 'angular2/core';
import {File} from './appInterface';
// import {FILES} from './mock-files';
import {Folder} from './appInterface';
import {FOLDERS} from './mock-folders';


@Injectable()
export class FileService {

  getFilesOf(folderName) {
        for (let index in FOLDERS) {
      if (FOLDERS[index].name === folderName) {
        return FOLDERS[index].files;
      }
    }
  }
  getFile(folderName,fileName) {
    let FILES:File[]=this.getFilesOf(folderName);
	  for (let index in FILES){
		  if (FILES[index].name === fileName){
        return FILES[index];
      }
    }
  }
  getFolders() {
    return Promise.resolve(FOLDERS);
  }

}
