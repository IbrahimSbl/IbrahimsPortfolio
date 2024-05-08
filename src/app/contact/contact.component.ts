import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  formData: any = {};
  
  validateEmail(){
    this.formData.FirstErr = (this.formData.FirstName == null || this.formData.FirstName.length === 0) ? "Please enter your first name." : null;
    this.formData.LastErr = (this.formData.LastName == null || this.formData.LastName.length === 0) ? "Please enter your last name." : null;
    this.formData.MsgErr = (this.formData.Message == null || this.formData.Message.length === 0) ? "Your message is required. Please type in a message." : null;

    let emailRegex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]+$/;
    this.formData.EmailErr = (this.formData.Email == null || !emailRegex.test(this.formData.Email)) ? "Invalid Email format." : null;

    return !(this.formData.FirstErr || this.formData.LastErr || this.formData.MsgErr || this.formData.EmailErr);
  }

  sendEmail() {
   if (!this.validateEmail()) return false;

    const subject = encodeURIComponent(`Contact Form Submission: Ibrahim's Portfolio`);
    const body = encodeURIComponent(`Name: ${this.formData.FirstName} ${this.formData.LastName}\n\nEmail: ${this.formData.Email}\n\nMessage: ${this.formData.Message}`);
    window.location.href = `mailto:ibrahimsbl1234@gmail.com?subject=${subject}&body=${body}`;

    return true;
  }
}
