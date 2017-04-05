import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { CompanyService } from '../company.service';
// import { Company } from '../company.model';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  public company: Company;
  private _router: Router;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, router: Router) {
    this._router = router;
    this._companyService = companyService;

   }

  ngOnInit() {
    this.company = new Company();
  }

}
