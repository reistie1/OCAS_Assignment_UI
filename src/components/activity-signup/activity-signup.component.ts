import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivityService } from 'src/services/activity.service';

@Component({
  selector: 'app-activity-signup',
  templateUrl: './activity-signup.component.html',
  styleUrls: ['./activity-signup.component.sass']
})
export class ActivitySignupComponent implements OnInit {
  activityList: any[];

  constructor(private activityService: ActivityService, private formBuilder: FormBuilder) { }

  signupForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.max(100),
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9\s.,-_*]+$")
    ]),
    lastName: new FormControl('', [
      Validators.max(100),
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9\s.,-_*]+$")
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    activityId: new FormControl(null, [
      Validators.required
    ]),
    comment: new FormControl('', [
      Validators.pattern("^[a-zA-Z0-9\s.,-_*]+$")
    ])
  });

  ngOnInit(): void {
    this.activityService.GetActivityList().subscribe((response: any) => {
      console.log(response.data);
      this.activityList = response.data;
    });
  }

  onSubmit(input: any)
  {

    this.activityService.RegisterForActivity(input.form.value).subscribe((response: any) => {
      var selectedActivity = this.activityList.filter(value => { return value.id == input.form.value.activityId })[0]
      localStorage.setItem("activityId", selectedActivity.id);
      localStorage.setItem("activityName", selectedActivity.activityName);
      window.location.href = "/activity"
    });
  }

}
