import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignedUpActivityListComponent } from 'src/components/signed-up-activity-list/signed-up-activity-list.component';
import { ActivityContainerComponent } from 'src/components/activity-container/activity-container.component';
import { NotificationComponentComponent } from '../components/notification-component/notification-component.component';
import { ActivitySignupComponent } from '../components/activity-signup/activity-signup.component';
import { ActivityFormContainerComponent } from './activity-form-container/activity-form-container.component';


@NgModule({
  declarations: [
    AppComponent,
    SignedUpActivityListComponent,
    ActivityContainerComponent,
    NotificationComponentComponent,
    ActivitySignupComponent,
    ActivityFormContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
