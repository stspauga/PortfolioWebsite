import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EffortLoggerComponent } from './effort-logger/effort-logger.component';
import { ExperienceComponent } from "./experience/experience.component"
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'experience', title: 'Experience', component: ExperienceComponent},
  { path: 'home', title: 'Tuliloa Pauga', component: HomeComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'projects', title: 'Projects', component: ProjectsComponent },
  { path: 'effort-logger', title: 'Effort Loggger Project', component: EffortLoggerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  ngOnInit(): void {
      console.log('AppRoutingModle Initialized');
  }
 }
