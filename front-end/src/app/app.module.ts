import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { JobBaseComponent } from './job-base/job-base.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyCreateComponent,
    CompanyListComponent,
    JobBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
