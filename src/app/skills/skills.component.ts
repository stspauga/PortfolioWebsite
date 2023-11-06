import { Component } from '@angular/core';

const skillsHeader: string = "Skills";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: string[] = ['Python','Java','C/C++','Data Structures & Algorithm',
                      'Swift','HTML','CSS','JavaScript','TypeScript',
                      'React','Next.js','Angular','SQL','Git','Docker','Agile Methodologies'];
  skillsHeader = skillsHeader;
}
