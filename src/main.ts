import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Set base href from environment
const baseElement = document.querySelector('base');
if (baseElement) {
  baseElement.setAttribute('href', environment.baseHref);
} else {
  console.error('Base element not found!');
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
