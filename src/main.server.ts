import 'zone.js/node'; // <-- pour le SSR

import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config.server';

export const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, appConfig, context);

export default bootstrap;
