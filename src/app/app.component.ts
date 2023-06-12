import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ng-env';

  constructor(private dataService: DataService){
    console.warn('dataService', this.dataService.getEnvironment());
  }


}
