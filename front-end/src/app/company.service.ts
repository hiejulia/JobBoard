import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
// import { AuthHttp } from '../auth/index';
import { contentHeaders } from '../common/index';
// import { Company } from './company.model';



/**
 *COMPANY SERVICE
 */
@Injectable()
export class CompanyService {
  private _http: Http;
  private _authHttp: AuthHttp;

  constructor(http: Http, authHttp: AuthHttp) {
    this._http = http;
    this._authHttp = authHttp;
   }

   //create new company
   create(company){
     let body = JSON.stringify(company);
     return this._authHttp
       .post('/api/companies',body,{headers:contentHeaders})
       .map((res:Response)=> res.json());

   }
   //find company by id
   findById(id){
    return this._http
      .get(`/api/companies/${id}`,{headers:contentHeaders})
      .map((res:Response) => res.json())
   }

   //get all companies from back end
   getAll(){
    return this._http
      .get(`/api/companies`,{headers:contentHeaders})
      .map((res:Response) => res.json());
   }

   //update a company
   update(company){
     let body = JSON.stringify(company);

    return this._authHttp
    .put(`/api/companies/${company._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())

   }

}
