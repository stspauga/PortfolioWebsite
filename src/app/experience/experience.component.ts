import { Component } from '@angular/core';

type experiences = {
  pic: string;
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
  { pic: 'assets/expERDC.png',
    jobTitle: 'Software Engineer Intern', 
    companyName: 'US Army Corps of Engineers Engineer Research and Development Center Website (EDRC)',
    date: 'May 2023 - Current', 
    location: 'Champaign, Illinois (Remote)', 
    detail1: '- Proficiently develop React web applications utilizing Next.js, Typescript, hooks and SQL to establish backend RESTful API endpoints and ensure secure database connectivity for data-driven applications ',
    detail2: '- Expertise in Docker for streamlined, consistent deployment across environments' },
  { pic: 'assets/ASU.png',
    jobTitle: 'Data Analytic Assistant',
    companyName: 'Arizona State University',
    date: 'Nov 2023 - Current',
    location: 'Tempe, AZ',
    detail1: '- Develop algorithms to filter through and categorize data'
},
  { pic: 'assets/hmwkRew.png',
    jobTitle: 'Web Developer Intern',
    companyName: 'My Homework Rewards',
    date: ' September 2022 - December 2022',
    location: 'Canada (Remote)',
    detail1: '- Translated upper-level high school math curriculum from textbooks into web modules, utilizing HTML, CSS, JavaScript and PHP for database integration.',
    detail2: '- Diagnosed and repaired malfunctioning modules, ensuring seamless functionality and a smooth learning experience for users, delivering about 2 - 3 modules a week.'
  }
]
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = experience;
}


