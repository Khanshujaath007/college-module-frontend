import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:8081';

  public registerCollege(collegeData: any) {
    return this.http.post(this.API + '/colleges', collegeData);
  }

  public getCollege() {
    return this.http.get(this.API + '/colleges');
  }

  public updateCollege(college: any, id: any) {
    return this.http.put(this.API + '/colleges/' + `${id}`, college);
  }

  public deleteColleges(id: any) {
    return this.http.delete(this.API + '/colleges/' + `${id}`);
  }
}
