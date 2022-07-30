import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityContainerComponent } from 'src/components/activity-container/activity-container.component';
import { ActivityFormContainerComponent } from 'src/components/activity-form-container/activity-form-container.component';

const routes: Routes = [
  { path: "", component: ActivityFormContainerComponent},
  { path: "activity", component: ActivityContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
