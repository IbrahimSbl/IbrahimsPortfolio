import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectService } from '../project-service.service';
import { Router } from '@angular/router';
import { project } from '../../types/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplayHoverPause:true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],//['&#8249', '&#8250;'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    }
  }
  projectList: project[] = [
    {
      imgSrc: "Restaurant website.jpg",
      detailedImg: ["Restaurant website.jpg","RestuarantWebsite.jpeg"],
      title: "Restaurant website",
      category: "Web Development",
      desc: ` Admin and customer views using HTML, CSS, JavaScript, and Bootstrap for frontend.
      • Utilized PHP and MYSQL on a local Apache server for backend functionality.
      • Admin view enabled menu updates and reservation management.
      • Customer view allowed menu exploration, ordering, and reservations.`,
      link: "",
      frontEnd: ['HTML','CSS','Javascript','Bootstrap'],
      backEnd: ['PHP','MYSQL']
    },
    {
      imgSrc: "Airline reservation.jpg",
      detailedImg: ["Airline reservation.jpg","Airline reservation2.png","Airline reservation3.png"],
      title: "Airline reservation",
      category: "Desktop Application Development",
      desc: ` Developed an Airline Reservation System desktop application using JavaFX for the user interface.
      • Employed SQL for database management, enabling functions such as adding, updating, and removing records.
      • Integrated MSSQL server to facilitate efficient data storage and retrieval.
      • Utilized Scene Builder to design intuitive and visually appealing user interfaces.
      • Implemented features allowing users to view flight information and make reservations.
      • Provided functionalities to manage flight data, including adding new flights and updating existing information. In addition to manage
      reservation information.`,
      link: "",
      frontEnd: ['JavaFX','SceneBuilder'],
      backEnd: ['Java','MSSQL','MVC']
    },
    {
      imgSrc: "Book shop.jpg",
      detailedImg: ["Book shop.jpg","Book shop2.jpg"],
      title: "Book shop",
      category: "Desktop Application Development",
      desc: ` Created a Book Shop desktop application using JavaFX that follows the MVC (Model-View-Controller) architecture.
      • Employed SQL for efficient database management, encompassing functionalities like adding, updating, and removing records.
      • Collaborated with MSSQL server to ensure streamlined data storage and retrieval.
      • Utilized Scene Builder to design an intuitive user interface, enhancing user experience.
      • Implemented features enabling users to explore available books, update inventory, and make purchases.
      • Provided functionalities to manage book data, including additions, updates, and deletions.`,
      link: "",
      frontEnd: ['JavaFX','SceneBuilder'],
      backEnd: ['Java','MSSQL','MVC']
    },
    {
      imgSrc: "CV database website.jpg",
      detailedImg: ["CV database website.jpg"],
      title: "CV database website",
      category: "Web development",
      desc: ` Developed a dynamic CV Database website utilizing ASP.NET Core 5.
      • Implemented comprehensive CRUD (Create, Read, Update, Delete) operations to manage the database effectively through connection to MS
      SQL server.
      • Enabled users to create new CV entries, view existing records, update information, and remove entries.
      • Showcased proficiency in ASP.NET Core 5, demonstrating the ability to build responsive and user-friendly web applications.`,
      link: "",
      frontEnd: ['HTML','CSS','JavaScript'],
      backEnd: ['C#','ASP.Net_Core5','VisualStudio','CRUD_Operations']
    },
    {
      imgSrc: "Calendar.jpg",
      detailedImg: ["Calendar.jpg"],
      title: "Calendar",
      category: "Web Development",
      desc: ` Developed a dynamic Calendar website utilizing HTML, CSS, and JavaScript.
      • Created an interactive interface that calculates and displays the calendar based on the current date.
      • Implemented logic to accurately determine the current date and generate the corresponding calendar view`,
      link: "",
      frontEnd: ['HTML','CSS','Bootstrap'],
      backEnd: []
    },
    {
      imgSrc: "AcademicRegistrationMain.png",
      detailedImg: ["AcademicRegistrationMain.png","AcademicRegistration2.png","AcademicRegistration3.png"],
      title: "University Academic Registration website",
      category: "Web Development",
      desc: `Developed an Academic Registration website using HTML, CSS, JavaScript, and Bootstrap for the frontend.
      • Employed PHP and MYSQL for robust backend functionality, enabling student registration and supervisor approval processes.
      • Implemented a student registration system where students can select courses for the upcoming semester.
      • Designed a supervisor interface for reviewing student registrations and approving/rejecting them.
      • Automated the computation of allowed courses based on passed courses through compensation and prerequisite requirements.
      • Ensured the system considered credit validity and prerequisites while students selected their courses.
      • Enhanced the academic registration process by providing a streamlined and efficient online solution for students and supervisors.`,
      link: "",
      frontEnd: ['HTML','CSS','Javascript','Bootstrap'],
      backEnd: ['PHP','MYSQL']
      },
    {
      imgSrc: "jewelryApp.jpeg",
      detailedImg: ["jewelryApp.jpeg","jewelryApp2.jpeg","jewelryApp3.jpeg"],
      title: "Jewelry Shop API and Customer Interface Websites",
      category: "Web Development",
      desc: `Developed a Jewelry Shop API that manages the jewelry item database.
      •Designed the API to handle database operations, including adding, updating, and removing jewelry items.
      • Created a Customer Interface for the jewelry shop.
      • The interface allows customers to:
      o Search for jewelry items.
      o Add selected items to their shopping cart.
      o Express preference for items by "liking" them.
      • The customer interface is designed to be user-friendly and intuitive, enhancing the shopping experience for customers.`,
      link: "",
      frontEnd: ['HTML','CSS','Blazor','Bootstrap'],
      backEnd: ['C#','ASP.Net Core','MSSQL']
    }
  ];

  constructor(private router: Router, private projectService: ProjectService){

  }
  // function for setting the service and redirect the user to the detialed-project component when clicking on the div
  navigateToDetail(index: number){
    this.projectService.setProject(this.projectList[index]);
    this.router.navigate(['project-detail']);
  }
}
