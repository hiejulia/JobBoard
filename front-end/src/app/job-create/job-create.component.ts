import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  public job: Job;
  private _router: Router;
  private _jobService: JobService;


  constructor(jobService: JobService, router: Router) { }

  ngOnInit() {
    this.job = new Job();
  }

  onSubmit(event) {
    event.preventDefault();

    this._jobService
    .create(this.job)
    .subscribe((job) => {
      if (job) {
        this.goToJob(job._id, job.slug);
      }
    });
  }

  goToJob(id, slug) {
    this._router.navigate(['JobDetail', { id: id, slug: slug}]);
  }

}
