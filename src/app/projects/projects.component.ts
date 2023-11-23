import { Component } from '@angular/core';

type language = {
  lang1?: string;
  lang2?: string;
  lang3?: string;
  lang4?: string;
  lang5?: string;
}

type framework = {
  frame1?: string;
  frame2?: string;
  frame3?: string;
  frame4?: string;
}

type projects = {
  name: string;
  image: string;
  languages?: language;
  frameworks?: framework;
  detail1?: string;
  detail2?: string;
  detail3?: string;
}

const projectList: projects[] = [
  { name: 'Effort Logger', image: '/assets/EffortLogger.gif', languages: { lang1: 'Java', lang2: 'JavaFX'}, detail1: '- Created a school project that tracks user data across a private firm, enables privacy data and upgrades previous versions of the app'}
]



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectList = projectList;
  currentImage: string = '/assets/placeholder.gif';

  changeImage(newImage: string): void {
    this.currentImage = newImage;
  }
}
