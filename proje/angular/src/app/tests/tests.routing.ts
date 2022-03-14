import { AddtestsComponent } from './addtests/addtests.component';
import { Routes } from "@angular/router";
import { EdittestsComponent } from './edittests/edittests.component';
import { AlltestComponent } from './alltest/alltest.component';
export const TestsRoutes: Routes = [
    {
        path: "",
        children: [
          {
            path: "addtests",
            component: AddtestsComponent
          },
          {
            path: "alltests",
            component: AlltestComponent
          },
          {
            path: "edittests",
            component: EdittestsComponent
          },
          
          
    ]
      }
    ];
    