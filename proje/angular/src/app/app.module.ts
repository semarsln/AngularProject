import {
  AdminLayoutComponent,
  AuthLayoutComponent,
  HeaderComponent,
  LayoutComponent,
  MenuComponent,
  NotificationComponent,
  OptionsComponent,
  SidebarComponent,} from "./core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from "ng-material-multilevel-menu";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AgmCoreModule } from "@agm/core";
import { AppRoutes } from "./app.routing";
import { BidiModule } from "@angular/cdk/bidi";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GeneratepasswordComponent } from './generatepassword/generatepassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    OptionsComponent,
    MenuComponent,
    AdminLayoutComponent,
    LayoutComponent,
    AuthLayoutComponent,
    GeneratepasswordComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
  
  
   
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    MatGridListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatInputModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { relativeLinkResolution: "legacy" }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BidiModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_API_KEY"
    }),
    PerfectScrollbarModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, MultilevelMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
