import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
  }

  public getCharacters(page: number = 1): Observable<any> {
    return this.httpGet('/character?page=' + page);
  }

  public getCharacter(id: number): Observable<any> {
    return this.httpGet('/character/' + id);
  }

  public getLocations(page: number = 1): Observable<any> {
    return this.httpGet('/location?page=' + page);
  }

  public getEpisodes(page: number = 1): Observable<any> {
    return this.httpGet('/episode?page=' + page);
  }

  private httpGet(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path);
  }
}
