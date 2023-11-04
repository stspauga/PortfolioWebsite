import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HelloComponent } from './hello/hello.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars as faS} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn as LinkedinIn, faGithubSquare as GitHubSq, faFacebookSquare as FBSq, faInstagramSquare as ISq } from '@fortawesome/free-brands-svg-icons';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HelloComponent,
    JumbotronComponent
  ],
  imports: [
    FontAwesomeModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(LinkedinIn,GitHubSq,FBSq,ISq,faS)
  }
}
