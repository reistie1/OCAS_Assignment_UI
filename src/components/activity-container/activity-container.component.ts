import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivityService } from 'src/services/activity.service';

@Component({
  selector: 'app-activity-container',
  templateUrl: './activity-container.component.html',
  styleUrls: ['./activity-container.component.sass']
})
export class ActivityContainerComponent implements OnInit {

  constructor(private activityService: ActivityService) { }
  activityName: string;
  attendingActivityList: any[];


  ngOnInit(): void {
    let activityId = localStorage.getItem("activityId") ?? "";
    this.activityName = localStorage.getItem("activityName") ?? "";
    this.activityService.GetSignedUpActivityList(activityId.toString()).subscribe((response: any) => {
      this.attendingActivityList = response.data
    });
  }

  GetSelectedActivityList(activityId: any)
  {
    this.activityService.GetSignedUpActivityList(activityId.toString()).subscribe((response: any) => {
      this.attendingActivityList = response.data
    });
  }

}
