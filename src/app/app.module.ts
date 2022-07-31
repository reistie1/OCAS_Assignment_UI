import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SignedUpActivityListComponent } from 'src/components/signed-up-activity-list/signed-up-activity-list.component';
import { ActivityContainerComponent } from 'src/components/activity-container/activity-container.component';
import { ActivitySignupComponent } from '../components/activity-signup/activity-signup.component';
import { ActivityFormContainerComponent } from 'src/components/activity-form-container/activity-form-container.component';
import { OptionsComponentComponent } from 'src/components/options-component/options-component.component';
import { RegisterErrorsComponent } from 'src/components/register-errors/register-errors.component';


@NgModule({
  declarations: [
    AppComponent,
    SignedUpActivityListComponent,
    ActivityContainerComponent,
    ActivitySignupComponent,
    ActivityFormContainerComponent,
    OptionsComponentComponent,
    RegisterErrorsComponent
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
