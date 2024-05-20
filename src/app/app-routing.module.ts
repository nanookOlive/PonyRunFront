import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent}from './landing-page/landing-page.component';
import {NewRunComponent} from './new-run/new-run.component';
import{ OldRunsComponent } from './old-runs/old-runs.component';
const routes: Routes = [
  {path:'' , component:LandingPageComponent},
  {path :"newRun",component:NewRunComponent},
  {path: "oldRuns",component:OldRunsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
