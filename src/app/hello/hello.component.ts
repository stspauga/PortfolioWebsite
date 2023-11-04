import { Component } from '@angular/core';

function scrollFunction() {
  const scrollPosition = window.scrollY;
  const navbar = document.getElementById('navbar');
  const navLink1 = document.getElementById('nav-link1');
  const navLink2 = document.getElementById('nav-link2');
  const navLink3 = document.getElementById('nav-link3');
  if (scrollPosition > 20) {
    if (navbar != null && navLink1 != null && navLink2 != null && navLink3 != null) {
      navbar.classList.remove('navbar');
      navbar.classList.add('navbar-scrolled');
      navLink1.classList.add('nav-link-scrolled');
      navLink2.classList.add('nav-link-scrolled');
      navLink3.classList.add('nav-link-scrolled');
    }
  } else if (scrollPosition <= 20) {
    if (navbar != null && navLink1 != null && navLink2 != null && navLink3 != null) {
      navbar.classList.remove('navbar-scrolled');
      navLink1.classList.remove('nav-link-scrolled');
      navLink2.classList.remove('nav-link-scrolled');
      navLink3.classList.remove('nav-link-scrolled');
      navbar.classList.add('navbar');
    }
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
