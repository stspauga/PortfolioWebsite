import { Component } from '@angular/core';

const description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export interface SkillsColumn {
  col_one: string;
  col_two: string;
  col_three: string;
}

const skills: SkillsColumn[] = [
  {col_one: 'Python', col_two: 'Data Structures and Algorithms', col_three: 'Java'},
  {col_one: 'C/C++', col_two: 'Swift', col_three: 'React'},
  {col_one: 'Angular', col_two: 'Next.js', col_three: 'Node.js'},
  {col_one: 'Git', col_two: 'HTML', col_three: 'CSS'},
  {col_one: 'Javascript', col_two: 'TypeScript', col_three: 'SQL'},
  {col_one: 'Docker', col_two: 'Agile Methodologies', col_three: 'JavaFX'}
];
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  dataSource = skills;
  description = description;
}
