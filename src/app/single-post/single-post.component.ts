import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post;

  constructor(private router: Router, private ar: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.ar.url.subscribe(url => {
      let id = url[url.length - 1].path.toString()

      let queryUrl = 'https://cs1530group11graph.uc.r.appspot.com/post/' + id

      this.http.get<any>(queryUrl).toPromise()
                .then(response => {
                  console.log(response)
                  if (response.response[0]) {
                    this.post = response.response[0]
                  } else {
                    //this.router.navigate(['/feed'])
                  }
                })
                .catch(err => console.error(err))

    })
  }

}
