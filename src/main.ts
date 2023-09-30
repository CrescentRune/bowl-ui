import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./app/layout/layout.component').then((m) => m.LayoutComponent),
    loadChildren: () => import('./app/layout/layout.routes').then((m) => m.routes)
    // path: '',
    // loadComponent: () => import('./app/game/join-game/join-game.component').then((m) => m),
  }
]

bootstrapApplication(AppComponent,
  { providers: [
    provideRouter(appRoutes),
    importProvidersFrom([
      HttpClientModule,
    ])
  ]}).catch((error) =>
  console.log(error)
);
