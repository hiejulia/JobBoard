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
  onSubmit(event){
    event.preventDefault();
    console.log(event);
    this._companyService
      .create(this.company)
      .subscribe((company) => {
        if(company) {
          this.goToCompany(company._id, company.slug);

        }
      },(err) => {
        console.log(err);
      });
  }

  goToCompany(id, slug) {
    this._router.navigate(['CompanyDetail', { id: id, slug: slug}]);
  }

}
