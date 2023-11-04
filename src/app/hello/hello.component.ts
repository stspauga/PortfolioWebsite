import { Component } from '@angular/core';

function scrollFunction() {
  const scrollPosition = window.scrollY;
  const navbar = document.getElementById('navbar');
  if (scrollPosition > 20) {
    console.log("this part worked");
    
  } else if (scrollPosition <= 20) {
    console.log("we're back");
  }
}

window.onscroll = function() {scrollFunction()};
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

}
