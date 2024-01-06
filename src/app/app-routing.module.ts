import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetialedProjectComponent } from './detialed-project/detialed-project.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},  // Default route for '#home-section'
  { path: 'project-detail', component: DetialedProjectComponent },
  { path: 'error', component: ErrorComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
