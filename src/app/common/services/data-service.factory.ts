import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceFactory {

  constructor(
    private readonly http: HttpClient) { }

  create(args: { endPoint: string; } | string): DataService;
  create(args: any): DataService {
    if (typeof args === 'string') {
      return new DataService({ endPoint: args.toLowerCase() }, this.http);
    } else {
      return new DataService(args, this.http);
    }
  }
}
