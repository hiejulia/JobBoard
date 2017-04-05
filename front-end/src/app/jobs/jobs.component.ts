import { Component, OnInit } from '@angular/core';



import { Router, RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../job.model';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public company: any;
  public jobs: Array<Job>;
  private _jobsService: JobService;
  private _router: Router;

  constructor(jobsService: JobService, router: Router) {
    this._router = router;
    this._jobsService = jobsService;
   }

  ngOnInit() {
    let query: any = {};

    if (this.company) {
      query.company = this.company;
    }

    this._jobsService
    .getAll(query)
    .subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

}
