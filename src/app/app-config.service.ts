import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;

  constructor(private injector: Injector) { }

  loadAppConfig() {
    const http = this.injector.get(HttpClient);
    return http.get('/assets/app-config.json') // {apiUrl}
      .toPromise()
      .then(data => {
        console.log('[AppConfigService] data', data);
        this.appConfig = data;
      });
  }

  get config() {
    console.log('[AppConfigService] get config()', this.appConfig)
    return this.appConfig;
  }
}
