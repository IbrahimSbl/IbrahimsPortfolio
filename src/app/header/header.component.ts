import { Component , HostListener } from '@angular/core';
import { fromEvent , debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarOpened: boolean = false;
  //store the last scrolling position
  lastScrollPosition: number = 0;
  showNavbar: boolean = true;

  constructor() {
    // fromEvent(window, 'scroll')
    //   .pipe(debounceTime(100)) // Adjust debounce time as needed
    //   .subscribe(() => {
    //     this.onWindowScroll();
    //   });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event : Event): void {
    const currentScrollPosition = window.scrollY;
    //don't trigger the change directly after scrolling
    if(Math.abs(this.lastScrollPosition - currentScrollPosition) > 100){
      if (currentScrollPosition >= this.lastScrollPosition) {
        // Scrolling down
        //to avoid rapidly change
        if(this.showNavbar){
          this.showNavbar = false;        
        }
      } else {
        // Scrolling up
        //to avoid rapidly change
        if(!this.showNavbar){
          this.showNavbar = true;        
        }
      }

      this.lastScrollPosition = currentScrollPosition;
    }

  }

  navbarOpened(){
    this.isNavbarOpened = !this.isNavbarOpened;
  }
}
