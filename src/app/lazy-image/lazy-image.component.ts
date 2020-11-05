import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input('srcURL') srcURL: string;
  @Input('maxHeight') maxHeight: number;
  @Input('maxWidth') maxWidth: number;
  @Input('minHeight') minHeight: number;
  @Input('minWidth') minWidth: number;
  @Input('alt') alt: string;

  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  loaded(event: any) {
    this.loading = false
  }

}
