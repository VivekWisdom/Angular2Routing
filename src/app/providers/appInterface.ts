export interface File {
  id: number;
  name: string;
  description: string;
}

export interface Folder{
  id:number;
  name:string;
  files: File[];
}
