import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private specProject:any = null;

  constructor() { }

  // getter
  getProject(){
    return this.specProject;
  }

  // setter
  setProject(proj: project) {
    this.specProject = proj;
  }
}
