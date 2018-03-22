import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { AskComponent } from './componets/ask/ask.component';
import { AboutComponent } from './componets/about/about.component';
import { BlogComponent } from './componets/blog/blog.component';
import { ContactComponent } from './componets/contact/contact.component';
import { TagsComponent } from './componets/tags/tags.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { EmpdashboardComponent } from './componets/empdashboard/empdashboard.component';
import { AdmindashboardComponent } from './componets/admindashboard/admindashboard.component';
import { ApproutingModule } from './app.routing';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { UserService } from './services/user.service';
import { FieldErrorComponent } from './componets/field-error/field-error.component';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './componets/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AskComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    TagsComponent,
    LoginComponent,
    SignupComponent,
    EmpdashboardComponent,
    AdmindashboardComponent,
    HeaderComponent,
    FooterComponent,
    FieldErrorComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [UserService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
