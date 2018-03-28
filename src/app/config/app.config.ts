import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    items: 'items',
    error404: '404'
  },
  endpoints: {
    items:  '' /* 'https://nodejs-example-app.herokuapp.com/heroes' */
  },
  snackBarDuration: 3000
};
