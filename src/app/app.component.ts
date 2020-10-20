import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor( private slimLoadingBarService: SlimLoadingBarService){ }

  startLoading() {
    this.slimLoadingBarService.start(() => {
        console.log('Loading complete');
    });
}

stopLoading() {
    this.slimLoadingBarService.stop();
}

completeLoading() {
    this.slimLoadingBarService.complete();
}
}

