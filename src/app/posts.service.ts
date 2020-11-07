import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor(private http: HttpClient) { }

  getUserPosts(userID: string): Promise<any> {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/posts/user/' + userID
    return this.http.get<any>(url).toPromise()
  }

  getGamePosts(gameID: string): Promise<any> {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/posts/game/' + gameID
    return this.http.get<any>(url).toPromise()
  }

  getPersonalizedPosts(userID: string): Promise<any> {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/posts/personalized/' + userID
    return this.http.get<any>(url).toPromise()
  }

  getMainPosts(userID: string): Promise<any> {
    let url = 'https://cs1530group11graph.uc.r.appspot.com/posts/'
    return this.http.get<any>(url).toPromise()
  }

}
