import { Component , OnInit , NgModule } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  typedText: string = '';
  textArray: string[] = ["Junior Software Developer", "Web Developer"];
  index: number = 0;
  currentText: string = '';
  letterIndex: number = 0;
  
  ngOnInit(): void {
    // this.typedText = '';
    // this.textArray = ["Junior Software Developer", "Web Developer"];
    // this.index = 0;
    // this.currentText = '';
    // this.letterIndex = 0;
  
    // Use an arrow function to maintain the correct 'this' context
    setTimeout(() => this.type(), 500);
  }
  
  type(): void {
    if (this.letterIndex < this.textArray[this.index].length) {
      this.currentText += this.textArray[this.index].charAt(this.letterIndex);
      this.typedText = this.currentText;
      this.letterIndex++;
      setTimeout(() => this.type(), 100);
    } else {
      //add animation
      document.getElementById('typing-cursor')?.classList.add("typing-cursor--blink");
      setTimeout(() => this.erase(), 1000);
    }
  }
  
  erase(): void {
    if (this.letterIndex > 0) {
      //remove the animation
      document.getElementById('typing-cursor')?.classList.remove("typing-cursor--blink");
      this.currentText = this.textArray[this.index].substring(0, this.letterIndex - 1);
      this.typedText = this.currentText;
      this.letterIndex--;
      setTimeout(() => this.erase(), 50);
    } else {
      this.index = (this.index + 1) % this.textArray.length;
      setTimeout(() => this.type(), 500);
    }
  }

}
