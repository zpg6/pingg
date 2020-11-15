import { Component } from '@angular/core';
import { AppData } from '../app-data';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  appData: AppData

  error

  constructor(private observerService: ObserverService) {
    this.observerService.getMessage().subscribe(msg => this.appData = msg)
  }

  isHovering: boolean;




  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    let type = files.item(0).type
    if (type.includes('image')) {
      this.appData.file = files.item(0)
      this.error = undefined
    } else {
      this.error = 'Our apologies, image files only!'
    }

  }

  logFiles() {
    console.log(this.appData.file)
  }

}
