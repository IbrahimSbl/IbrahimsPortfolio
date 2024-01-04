import { Component , OnInit } from '@angular/core';
import { ProjectService } from '../project-service.service';
import { project } from '../../types/project';

@Component({
  selector: 'app-detialed-project',
  templateUrl: './detialed-project.component.html',
  styleUrl: './detialed-project.component.css'
})
export class DetialedProjectComponent implements OnInit{
  specProject:any = {};
  //Inject project service
  constructor(private ps: ProjectService) {}

  ngOnInit(): void {
    this.specProject= this.ps.getProject();
    console.log(this.specProject);
  }

}
