import { Routes } from '@angular/router';
import { LoginPageComponent } from '../app/login-page/login-page.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'home',pathMatch:'full'
    },
    {
        path:"home",
        loadComponent:()=>import("../app/home/home.component").then((comp)=>comp.HomeComponent),
    },
    {
        path:"about-us",
        loadComponent:()=>import("../app/home-page/about-us/about-us.component").then((comp)=>comp.AboutUsComponent)
    },
    {
        path:"current-status",
        loadComponent:()=>import("../app/home-page/current-status/current-status.component").then((comp)=>comp.CurrentStatusComponent)
    },
    {
        path:"events",
        loadComponent:()=>import("../app/home-page/events/events.component").then((comp)=>comp.EventsComponent)
    },
    {
        path:"documents",
        loadComponent:()=>import("../app/home-page/documents/documents.component").then((comp)=>comp.DocumentsComponent)
    },
    {
        path:"login",
        loadComponent:()=>import("../app/login-page/login-page.component").then((comp)=>comp.LoginPageComponent),
    },
    
];
