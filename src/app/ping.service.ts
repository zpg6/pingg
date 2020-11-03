import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PingService {

  pingStream: Subject<number> = new Subject<number>();
  ping: number = 0;
  url: string = "https://cors-test.appspot.com/test";

  constructor(private http: HttpClient) {
    let timeStart: number = performance.now();
    this.http.get(this.url)
      .subscribe((data) => {
        let timeEnd: number = performance.now();

        let ping: number = timeEnd - timeStart;
        this.ping = ping;
        this.pingStream.next(ping);
      });
  }
}
