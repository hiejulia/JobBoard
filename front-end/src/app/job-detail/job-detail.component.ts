import { Component, OnInit } from '@angular/core';

import { Params, RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  public job: Job;
  private _routeParams: Params;
  private _jobService: JobService;

  constructor(jobService: JobService, routerParams: Params) { }

  ngOnInit() {
    const id: string = this._routeParams.get('id');
    this.job = new Job();
    this._jobService
    .findById(id)
    .subscribe((job) => {
      this.job = job;
    });
  }


}
