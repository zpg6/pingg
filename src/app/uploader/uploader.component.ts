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

  constructor(private observerService: ObserverService) {
    this.observerService.getMessage().subscribe(msg => this.appData = msg)
  }

  isHovering: boolean;



  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.appData.file = files.item(0)
  }

  logFiles() {
    console.log(this.appData.file)
  }

}
