import { Component } from '@angular/core';

const currentWork: string = "I am currently a software engineer intern at the US Army Corps of Engineers " +
                            "Engineer Research and Development Center Website " +
                            "(EDRC), where I create web applications for various clients and third party " +
                            "affiliates. Listed here are just a few of the many frameworks and technologies I use: " +
                            "React, Next.js, Typescript, SQL, and Docker. " +
                            "Click on the icon above to see the home page of the ERDC.";

@Component({
  selector: 'app-current-job',
  templateUrl: './current-job.component.html',
  styleUrls: ['./current-job.component.css']
})
export class CurrentJobComponent {
  currentWork = currentWork;
}
