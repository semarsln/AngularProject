import { AddcandidatesComponent } from "./addcandidates/addcandidates.component";
import { AllcandidatesComponent } from "./allcandidates/allcandidates.component";
import { Routes } from "@angular/router";

export const CandidatesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "allcandidates",
        component: AllcandidatesComponent
      },
      {
        path: "addcandidates",
        component: AddcandidatesComponent
      },
      
    ]
  }
];
