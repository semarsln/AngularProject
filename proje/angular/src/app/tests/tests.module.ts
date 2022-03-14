import { AddtestsComponent } from './addtests/addtests.component';
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {MatExpansionModule} from '@angular/material/expansion';
import { FileUploadModule } from "ng2-file-upload";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import {MatListModule} from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatToolbarModule } from "@angular/material/toolbar";

import { QuillModule } from "ngx-quill";

import {TestsRoutes} from "./tests.routing";
import { AlltestComponent } from './alltest/alltest.component';
import { EdittestsComponent } from './edittests/edittests.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TestsRoutes),
    MatInputModule,
    NgxDatatableModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatExpansionModule,
    FlexLayoutModule,
    
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,

    FileUploadModule,
    QuillModule.forRoot()
  ],
  declarations: [
    AddtestsComponent,
    AlltestComponent,
    EdittestsComponent
  
  ]
})
export class TestsModule {}