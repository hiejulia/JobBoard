import { Component, OnInit,Directive, ElementRef, Input } from '@angular/core';

import { JobService } from '../job.service';
import { Job } from '../job.model';
import { JobsComponent } from '../jobs/jobs.component';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',

  styleUrls: ['./job-list.component.css']
})



@Directive({ selector: '[JobsComponent]' })



export class JobListComponent implements OnInit {
  public jobs: Array<Job>;
  private _jobsService: JobService;

  constructor(jobsService: JobService) {
    this._jobsService = jobsService;
   }

  ngOnInit() {
  }

}
