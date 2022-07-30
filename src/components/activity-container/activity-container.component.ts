import { Component, OnInit } from '@angular/core';
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
    this.GetSelectedActivityList(activityId.toString());
  }

  GetSelectedActivityList(activityId: string)
  {
    this.activityService.GetSignedUpActivityList(activityId).subscribe((response: any) => {
      this.attendingActivityList = response.data
    });
  }

}
