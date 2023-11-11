import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloComponent } from './hello/hello.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars as faS} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn as LinkedinIn, faGithubSquare as GitHubSq, faFacebookSquare as FBSq, faInstagramSquare as ISq } from '@fortawesome/free-brands-svg-icons';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CurrentJobComponent } from './current-job/current-job.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { EffortLoggerComponent } from './effort-logger/effort-logger.component';
import { PdfResumeDownloadComponent } from './pdf-resume-download/pdf-resume-download.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HelloComponent,
    JumbotronComponent,
    CurrentJobComponent,
    SkillsComponent,
    ExperienceComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    EffortLoggerComponent,
    PdfResumeDownloadComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(LinkedinIn,GitHubSq,FBSq,ISq,faS)
  }
}
