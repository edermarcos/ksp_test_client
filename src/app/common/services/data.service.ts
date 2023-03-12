import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class DataService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private readonly args: { endPoint: string },
    private readonly http: HttpClient) {
  }

  multipart(method: string, data: any, args: string = '') {
    return this.http.request(new HttpRequest(method, `${ this.getUrl() }${ args }`, data, { responseType: 'json' }))
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  save(data: any, args: string = '') {
    const body = JSON.stringify(data);
    return this.http.post(`${ this.getUrl() }${ args }`, body, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  update(data: any, id: string) {
    const body = JSON.stringify(data);
    return this.http.patch(`${ this.getUrl() }${ id }`, body, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  get<T>(id: string) {
    return this.http.get<T>(`${ this.getUrl() }${ id }`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  getAll(q: string = '') {
    return this.http.get(`${ this.getUrl() }${ q }`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  delete(id: string) {
    return this.http.delete(`${ this.getUrl() }${ id }`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  private getUrl() {
    return this.args.endPoint ? `http://localhost:3000/${ this.args.endPoint }/` : '';
  }

  private handleError(error: string) {
    console.error(error);
    return throwError(error);
  }
}
