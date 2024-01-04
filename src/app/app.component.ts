import { Component , OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularPortfolio';

  ngOnInit(): void {
    AOS.init({
      duration: 800, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function
      offset: 200, // Offset (in pixels) from the original trigger point
      once: true
    });
  }
}
