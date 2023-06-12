import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Injectable({providedIn: 'root'})
export class DataService {
  basePath!: string;

  constructor(private environment: AppConfigService){
    this.basePath = this.environment.config.apiUrl;
    console.error('this.basePath', this.basePath)
  }


  getEnvironment(){
    return this.basePath
  }





}
