import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarOpened: boolean = false;

  navbarOpened(){
    this.isNavbarOpened = !this.isNavbarOpened;
  }
}
