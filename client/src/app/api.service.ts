import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Earthquakes, IECsv} from './protos/csv';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) {
  }

  refresh(): Observable<void> {
    return this.http.get<void>(`${environment.SERVER_URL}/refresh`);
  }

  // GET JSON things
  fetchJson(): Observable<IECsv[]> {
    return this.http.get<{ earthquakes: IECsv[] }>(`${environment.SERVER_URL}/getjsondata`)
      .pipe(map(res => res.earthquakes), catchError(e => this.handleError(e)));
  }

  // GET protobuf raw
  fetchProtobuf(): Observable<IECsv[]> {
    const headers = new HttpHeaders({Accept: 'application/x-protobuf'});
    return this.http.get(`${environment.SERVER_URL}/getprotodata`, {headers, responseType: 'arraybuffer'})
      .pipe(map(res => this.rawProtobuf(res)),
        catchError(this.handleError)
      );
  }

  // GET protobuf parsed
  fetchProtobufParsed(): Observable<IECsv[]> {
    const headers = new HttpHeaders({Accept: 'application/x-protobuf'});
    return this.http.get(`${environment.SERVER_URL}/getprotodata`, {headers, responseType: 'arraybuffer'})
      .pipe(map(res => this.parseProtobuf(res)),
        catchError(this.handleError)
      );
  }

  // POST protobuf
  postProtobuf() {
    const headers = new HttpHeaders({Accept: 'application/x-protobuf'});
    const body = 'test body!'
    return this.http.post(`${environment.SERVER_URL}/postdata`, body, {headers})
  }

  // PUT protobuf
  putProtobuf() {
    const headers = new HttpHeaders({Accept: 'application/x-protobuf'});
    const body = 'test body!'
    return this.http.put(`${environment.SERVER_URL}/putdata`, body, {headers})
  }

  // DELETE protobuf
  deleteProtobuf() {
    const headers = new HttpHeaders({Accept: 'application/x-protobuf'});
    return this.http.delete(`${environment.SERVER_URL}/deletedata`, {headers})
  }

  // PATCH protobuf
  patchProtobuf() {
    const headers = new HttpHeaders({Accept: 'application/x-protobuf'});
    const body = {'body' : 'test body!'};
    return this.http.patch(`${environment.SERVER_URL}/patchdata`, body, {headers})
  }

  // results processing
  rawProtobuf(response: ArrayBuffer) {
    const records = new Uint8Array(response)
    return records;
  }

  parseProtobuf(response: ArrayBuffer): IECsv[] {
    // eslint-disable-next-line no-console
    console.time('decodeprotobuf');
    const records = Earthquakes.decode(new Uint8Array(response));
    // eslint-disable-next-line no-console
    console.timeEnd('decodeprotobuf');
    return records.records;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any): Observable<any> {
    console.error(error);
    return throwError(error || 'Server error');
  }
}