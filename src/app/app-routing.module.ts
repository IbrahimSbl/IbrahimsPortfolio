import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},  // Default route for '#home-section'
  // { path: '#projects-section', component: HomeComponent },
  // { path: '#about-section', component: HomeComponent },
  // { path: '#services-section', component: HomeComponent },
  // { path: '#contact-section', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
