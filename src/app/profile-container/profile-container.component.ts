import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  user;

  constructor(private observerService: ObserverService, private ar: ActivatedRoute, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.ar.url.subscribe(url => {
      let id = url[url.length - 1].path.toString()
      let profile = this.observerService.getMessageOnce().profile
      if (id === profile.id) {
        this.user = profile
        console.log(this.user)
      } else {
        let url = 'https://cs1530group11graph.uc.r.appspot.com/user/' + id
        this.http.get<any>(url).toPromise().then(profileObj => {
          var data = profileObj.response.properties
          if (data) {
            this.user = data
          }
          else {
            this.router.navigate(['/profile/'+profile.id])
          }
        })
      }
    })
  }

}
