import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpacemenService {

  private url = 'https://nikk-spicemen-server.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  getAllSpicemen(): Observable<any> {
    return this.http.get(this.url + 'spacemen');
  }
}
