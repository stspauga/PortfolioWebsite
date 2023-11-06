import { Component } from '@angular/core';

const description: string = "Hello there! I'm Tuli, a proud husband and father, " + 
                            "currently a senior at ASU on the path to earning my software engineering degree. " +
                            "I am proficient in Python, Java, C/C++, and various web frameworks, " +
                            "I have a solid foundation in data structures and algorithms. " +
                            "My passion lies in using these skills to automate code and drive advancements in AI/ML research. " +
                            "I'm often recognized for my hardworking and independent nature, I excel as both a good listener and a valuable team member. " +
                            "With a deep interest in technology and a commitment to excellence, " +
                            "I am poised to make significant contributions in the field of software engineering.";

const aboutMeHeader: string = "About Me";

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
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  dataSource = skills;
  description = description;
  aboutMeHeader = aboutMeHeader;
  
}
