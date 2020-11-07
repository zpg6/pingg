import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {



  constructor(private http: HttpClient) { }

  getGames(userID: string) {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + userID + '/games-followed/'
    return this.http.get<any>(url).toPromise()
  }

  getFollowers(userID: string) {

    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + userID + '/followers'
    return this.http.get<any>(url).toPromise()

  }

  getFollowing(userID: string) {

    let url = 'https://cs1530group11graph.uc.r.appspot.com/users/' + userID + '/following'
    return this.http.get<any>(url).toPromise()

  }

}
