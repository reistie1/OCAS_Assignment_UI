import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-signed-up-activity-list',
  templateUrl: './signed-up-activity-list.component.html',
  styleUrls: ['./signed-up-activity-list.component.sass']
})
export class SignedUpActivityListComponent implements OnInit {
  people: any[]
  name: string;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    let activityId = localStorage.getItem("activityId") ?? "";
    this.name = localStorage.getItem("activityName") ?? "";
    this.activityService.GetSignedUpActivityList(activityId.toString()).subscribe((response: any) => {
      this.people = response.data
    });
  }

}
