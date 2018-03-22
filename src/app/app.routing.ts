import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './componets/about/about.component';
import {AdmindashboardComponent} from './componets/admindashboard/admindashboard.component';
import { AskComponent } from './componets/ask/ask.component';
import { BlogComponent } from './componets/blog/blog.component';
import {ContactComponent} from './componets/contact/contact.component';
import {EmpdashboardComponent} from './componets/empdashboard/empdashboard.component';
import {HomeComponent} from './componets/home/home.component';
import {LoginComponent} from './componets/login/login.component';
import {SignupComponent} from './componets/signup/signup.component';
import {TagsComponent} from './componets/tags/tags.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';



const appRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
	{path: 'admindashboard', component: AdmindashboardComponent},
    {path: 'ask', component: AskComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'empdashboard', component: EmpdashboardComponent},
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'tags', component: TagsComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes,{ useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class ApproutingModule {}