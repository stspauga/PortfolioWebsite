import { Component, OnInit } from '@angular/core';

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

  submitForm() {
    throw new Error('Method not implemented.');
    }
}

