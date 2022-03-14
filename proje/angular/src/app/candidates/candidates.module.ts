import { CalendarModule, DateAdapter } from "angular-calendar";
import { CandidatesRoutes } from "./candidates.routing";
import { AllcandidatesComponent } from "./allcandidates/allcandidates.component";
import { ChartsModule } from "ng2-charts";
import { AddcandidatesComponent } from "./addcandidates/addcandidates.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { RouterModule } from "@angular/router";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CandidatesRoutes),
    MatToolbarModule,
   
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxDatatableModule,
    MatExpansionModule,
    MatSelectModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlexLayoutModule,
    ChartsModule,
    PerfectScrollbarModule,
    CommonModule,
    NgxDatatableModule,
    MatGridListModule,
   
    MatInputModule,
   
  ],


  declarations: [
    AllcandidatesComponent,
    AddcandidatesComponent,
   
  ],
 
})
export class CandidatesModule {}
