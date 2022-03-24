import { AdminLayoutComponent, AuthLayoutComponent } from "./core";
import { Routes } from "@angular/router";
import { GeneratepasswordComponent } from './generatepassword/generatepassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ExamComponent } from './exam/exam.component';
export const AppRoutes: Routes = [
  
    
    {
      path:"signin",
     component:SigninComponent
   

   },
   {
    path:"exam",
   component:ExamComponent
 

 },
   
   {
    path:"forgot",
   component:ForgotComponent
 

 },
  {
      path:"generatepassword",
     component:GeneratepasswordComponent
   

   },
  
   {
    path:"signup",
   component:SignupComponent
 

 },



 
  {
    path: "**",
    redirectTo: "session/404"
  }
  ,
  
  {
   
    path: "",
    component: AdminLayoutComponent,
  
  
    children: [
      {
        path: "candidates",
        loadChildren: () => import("./candidates/candidates.module").then(m => m.CandidatesModule)
      },
    
      {
        path: "tests",
        loadChildren: () => import("./tests/tests.module").then(m => m.TestsModule)
      },
    
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
   
  
      {
        path: "charts",
        loadChildren: () =>
          import("./chartlib/chartlib.module").then(m => m.ChartlibModule)
      },
     
    
     
    
      
    ]},
];
