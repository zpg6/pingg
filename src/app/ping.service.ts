import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PingService {

  pingStream: Subject<number> = new Subject<number>();
  ping: number = 0;
  url: string = "https://cs1530group11graph.uc.r.appspot.com/";

  constructor(private http: HttpClient) {
    let timeStart: number = new Date().getMilliseconds();
    this.http.get(this.url).toPromise().then(response => {
      let timeEnd: number = new Date().getMilliseconds();
      console.log("start: " + timeStart)
      console.log("end: " + timeEnd)
      console.log("response: " + response)

      let ping: number = timeEnd - timeStart;
      this.ping = ping;
      this.pingStream.next(ping);
    }).catch( err => {
      let timeEnd: number = new Date().getMilliseconds();
      console.log("start: " + timeStart)
      console.log("end: " + timeEnd)

      let ping: number = timeEnd - timeStart;
      this.ping = ping;
      console.log("ping: " + ping)
      console.log("this.ping: " + this.ping)
      this.pingStream.next(ping);
    })
  }
}
