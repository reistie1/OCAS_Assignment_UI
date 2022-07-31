import { Component, OnInit } from '@angular/core';
import { requestParameters } from 'src/models/requestParameters';
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
  activitiesList: any[];
  activityId: string
  activity: any
  pageNumber: number = 1;
  pageSize: number = 50;


  ngOnInit(): void {
    this.activityId = localStorage.getItem("activityId") ?? "";
    this.activityName = localStorage.getItem("activityName") ?? "";

    this.activityService.GetActivityList().subscribe((response: any) => {
      this.activitiesList = response.data;
    })
    this.GetSelectedActivityList(this.activityId);
  }

  GetSelectedActivityList(activityId: string)
  {
    this.activityService.GetSignedUpActivityList(activityId, new requestParameters(this.pageNumber, this.pageSize)).subscribe((response: any) => {
      this.attendingActivityList = response.data
      this.activityId = activityId;
      this.UpdateSelectedActivity(activityId)
    });
  }

  GetPagedActivityList(page: number)
  {
    let requestedPage = page <= 0 ? 1 : page;
    this.activityService.GetSignedUpActivityList(this.activityId, new requestParameters(requestedPage, this.pageSize)).subscribe((response: any) => {
      this.attendingActivityList = response.data
    });
  }

  UpdateSelectedActivity(activityId: string)
  {
    if(this.activitiesList && this.activitiesList.length > 0)
    {
      let activity = this.activitiesList.filter((curr: any, index: number) => {return curr.id.toString() == activityId})

      if(activity !== undefined)
      {
        this.activityName = activity[0].activityName
        this.activityId = activity[0].id
      }

    }
  }

}
