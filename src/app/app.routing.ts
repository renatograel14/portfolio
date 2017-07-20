import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ExperienceComponent,
  WelcomeComponent,
  SkillsComponent,
  AboutComponent
} from './pages';
import { PageGuard } from './theme/guards/page-active.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', canActivate: [PageGuard], component: WelcomeComponent },
  { path: 'exp', canActivate: [PageGuard], component: ExperienceComponent },
  { path: 'skills', canActivate: [PageGuard], component: SkillsComponent },
  { path: 'about', canActivate: [PageGuard], component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  WelcomeComponent,
  ExperienceComponent,
  SkillsComponent,
  AboutComponent
];
