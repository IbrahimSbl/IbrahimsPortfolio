import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent {
  show:boolean = true;
  toggleReminder(){
    this.show=!this.show;
  }
}
