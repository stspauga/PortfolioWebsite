import { Component } from '@angular/core';

type experiences = {
  jobTitle: string;
  companyName: string; 
  date: string;
  location: string;
  detail1?: string;
  detail2?: string;
  detail3?: string;
  detail4?: string;
}

const experience: experiences[] = [
  { jobTitle: 'Software Engineer Intern', 
    companyName: 'US Army Corps of Engineers Engineer Research and Development Center Website (EDRC)',
    date: 'May 2023 - Current', 
    location: 'Champaign, Illinois (Remote)', 
    detail1: 'Proficiently develop React web applications utilizing Next.js, Typescript, hooks and SQL to establish backend RESTful API endpoints and ensure secure database connectivity for data-driven applications',
    detail2: 'Expertise in Docker for streamlined, consistent deployment across environments'  }
]
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = experience;
}


