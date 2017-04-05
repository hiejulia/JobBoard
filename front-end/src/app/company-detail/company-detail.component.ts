import { Component, OnInit } from '@angular/core';


import { Params, RouterLink } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { JobsComponent } from '../../job/index';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  public company: Company;
  private _routeParams: RouteParams;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, routerParams: Params) {
    this._routeParams = routerParams;
    this._companyService = companyService;
   }

  ngOnInit() {
    const id: string = this._routeParams.get('id');
    this.company = new Company();
    this._companyService
    .findById(id)
    .subscribe((company) => {
      this.company = company;
    });
  }

}
