import { Component, OnInit } from '@angular/core';


import { Router, RouterLink } from '@angular/router';
import { CompanyService } from '../company.service';
// import { Company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companies: Array<Company>;
  private _router: Router;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, router: Router) {
    this._router = router;
    this._companyService = companyService;
   }

  ngOnInit() {
    this._companyService
      .getAll().subscribe((companies) => {
        this.companies = companies;
      });

  }

}
