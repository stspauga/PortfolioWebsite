import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400,500,600,700,800&display=swap');
    /* Other component-specific styles go here */
  `],
})
export class AppComponent {
  title = 'portfolioWebsite';
}
