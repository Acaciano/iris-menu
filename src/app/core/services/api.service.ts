import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../shared/config';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient
  ) { }

  protected get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${config.API_URL}${path}`, { params });
  }

  protected put(path: string, body: object = {}): Observable<any> {
    return this.http.put(
      `${config.API_URL}${path}`,
      JSON.stringify(body));
  }

  protected post(path: string, body: object = {}, httpOptions?): Observable<any> {
    console.log(JSON.stringify(body));

    return this.http.post(
      `${config.API_URL}${path}`,
      JSON.stringify(body),
      httpOptions);
  }

  protected postFormData(path: string, body: object = {}, httpOptions): Observable<any> {
    const newBody = this.getFormUrlEncoded(body);
    return this.http.post(
      `${config.API_URL}${path}`,
      newBody.toString(),
      httpOptions);
  }

  protected getFormUrlEncoded(toConvert) {
    const urlSearchParams  = new URLSearchParams();

    // tslint:disable-next-line:forin
    for (const property in toConvert) {
      const encodedKey = property;
      const encodedValue = toConvert[property];
      urlSearchParams.append(encodedKey, encodedValue);
    }

    return urlSearchParams;
  }

  protected delete(path): Observable<any> {
    return this.http.delete(`${config.API_URL}${path}`);
  }
}
