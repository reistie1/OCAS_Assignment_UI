import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-signed-up-activity-list',
  templateUrl: './signed-up-activity-list.component.html',
  styleUrls: ['./signed-up-activity-list.component.sass']
})
export class SignedUpActivityListComponent implements OnInit {
  name: string;
  @Input("attending") people: any[];

  constructor() { }

  ngOnInit(): void {}

}
