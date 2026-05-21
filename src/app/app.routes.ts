import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TeamDetailComponent } from './team-details/team-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team/:id', component: TeamDetailComponent },
];