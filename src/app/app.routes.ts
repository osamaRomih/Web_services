import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ServiceDetailsComponent } from './modules/Services-component/components/service-details/service-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'service/:id', component: ServiceDetailsComponent },
];
