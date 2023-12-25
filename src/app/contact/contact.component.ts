import { Component } from '@angular/core';

const submitMessage = document.getElementById('submitMessage');


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';


  isActiveOne: boolean = false;
  isActiveTwo: boolean = true;
  submitForm() {
    this.isActiveOne = !this.isActiveOne;
    
  }
}

