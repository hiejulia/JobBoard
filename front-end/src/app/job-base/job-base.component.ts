import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-base',
  templateUrl: './job-base.component.html',
  styleUrls: ['./job-base.component.css']
})



// @RouteConfig([
//   { path: '/', as: 'JobList', component: JobListComponent, useAsDefault: true },
//   { path: '/:id/:slug', as: 'JobDetail', component: JobDetailComponent },
//   { path: '/create', as: 'JobCreate', component: JobCreateComponent }
// ])



export class JobBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
