import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivityService } from 'src/services/activity.service';

@Component({
  selector: 'app-activity-signup',
  templateUrl: './activity-signup.component.html',
  styleUrls: ['./activity-signup.component.sass']
})
export class ActivitySignupComponent implements OnInit {
  activityList: any[];
  @Output() PassError = new EventEmitter<any>();


  constructor(private activityService: ActivityService, private formBuilder: FormBuilder) { }

  signupForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.maxLength(100),
      Validators.minLength(2),
      Validators.required,
      Validators.pattern("^[a-zA-Z\\s.,-_*]*$")
    ]),
    lastName: new FormControl('', [
      Validators.maxLength(100),
      Validators.minLength(2),
      Validators.required,
      Validators.pattern("^[a-zA-Z\\s.,-_*]+$")
    ]),
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    activityId: new FormControl(null, [
      Validators.required
    ]),
    comments: new FormControl('', [
      Validators.pattern("^[a-zA-Z0-9\\s.,-_*]+$")
    ]),
    gender: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ])
  });


  ngOnInit(): void {
    this.activityService.GetActivityList().subscribe((response: any) => {
      this.activityList = response.data;
    });
  }

  onSubmit(input: any)
  {
    var selectedActivity = this.activityList.filter(value => { return value.id == input.form.value.activityId })[0]
    let comments = input.form.value.comments == "" ? null : input.form.value.comments;
    localStorage.setItem("activityId", selectedActivity.id);
    localStorage.setItem("activityName", selectedActivity.activityName);


    this.activityService.RegisterForActivity({...input.form.value, comments: comments}).subscribe((response: any) => {
      if(response.Succeeded == false)
      {
        this.PassError.emit(response.Errors);
      }
      else
      {
        this.redirect();
      }
    })
  }

  redirect(){
    window.location.href = "/activity"
  }

}
