import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { JobBaseComponent } from './job-base/job-base.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileBlockComponent } from './profile-block/profile-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyCreateComponent,
    CompanyListComponent,
    JobBaseComponent,
    JobsComponent,
    JobListComponent,
    JobDetailComponent,
    JobCreateComponent,
    CompanyDetailComponent,
    ProfileEditComponent,
    ProfileBlockComponent
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
