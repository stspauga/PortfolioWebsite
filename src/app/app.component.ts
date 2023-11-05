import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
    /* Other component-specific styles go here */
  `],
})
export class AppComponent {
  title = 'portfolioWebsite';
}
