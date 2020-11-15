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

  @Input('maxHeightPx') maxHeightPx: number;
  @Input('maxWidthPx') maxWidthPx: number;
  @Input('minHeightPx') minHeightPx: number;
  @Input('minWidthPx') minWidthPx: number;

  @Input('alt') alt: string;

  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  loaded(event: any) {
    this.loading = false
  }

  getMinHeight() {
    if (this.minHeightPx)
      return `${this.minHeightPx}` + 'px'
    else if (this.minHeight)
      return `${this.minHeight}` + '%'
    else
      return 'none'
  }

  getMaxHeight() {
    if (this.maxHeightPx)
      return `${this.maxHeightPx}` + 'px'
    else if (this.maxHeight)
      return `${this.maxHeight}` + '%'
    else
      return 'none'
  }

  getMinWidth() {
    if (this.minWidthPx)
      return `${this.minWidthPx}` + 'px'
    else if (this.minWidth)
      return `${this.minWidth}` + '%'
    else
      return 'none'
  }

  getMaxWidth() {
    if (this.maxWidthPx)
      return `${this.maxWidthPx}` + 'px'
    else if (this.maxWidth)
      return `${this.maxWidth}` + '%'
    else
      return 'none'
  }



}
