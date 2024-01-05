import { Component , OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectService } from '../project-service.service';
import { project } from '../../types/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detialed-project',
  templateUrl: './detialed-project.component.html',
  styleUrl: './detialed-project.component.css'
})
export class DetialedProjectComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplayHoverPause:true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }
  specProject:project = {
    imgSrc: '',
    detailedImg: [''],
    title: '',
    category: '',
    desc: '',
    link: '',
    frontEnd: [''],
    backEnd: ['']
  };
  //Inject project service
  constructor(private router: Router ,private ps: ProjectService) {}

  ngOnInit(): void {
    this.specProject= this.ps.getProject();
    console.log(this.specProject);
    if(this.specProject == null)this.router.navigate(['error']);
  }

}
