import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityContainerComponent } from 'src/components/activity-container/activity-container.component';
import { SignedUpActivityListComponent } from 'src/components/signed-up-activity-list/signed-up-activity-list.component';

const routes: Routes = [
  { path: "", component: ActivityContainerComponent},
  { path: "activity", component: SignedUpActivityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
