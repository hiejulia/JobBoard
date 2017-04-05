import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { AuthHttp } from '../auth/index';
import { contentHeaders, serializeQuery } from '../common/index';
import { Job } from './job.model';

@Injectable()
export class JobService {

  constructor() { }

}
