import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private specProject:any = new BehaviorSubject({mgSrc: '',
    detailedImg: [''],
    title: '',
    category: '',
    desc: '',
    link: '',
    frontEnd: [''],
    backEnd: ['']
});

  constructor() { }

  // getter
  getProject(){
    return this.specProject.asObservable();
  }

  // setter
  setProject(proj: project) {
    this.specProject.next(proj);
  }
}
