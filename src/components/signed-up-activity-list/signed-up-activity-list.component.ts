import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { activitySignup } from '../../models/activitySignup';

@Component({
  selector: 'app-signed-up-activity-list',
  templateUrl: './signed-up-activity-list.component.html',
  styleUrls: ['./signed-up-activity-list.component.sass']
})
export class SignedUpActivityListComponent implements OnInit {
  name: string;
  public pageSize: number = 50;
  @Input("attending") people: activitySignup[];
  @Input("pageNumber") pageNumber: number;
  @Output() NextPage = new EventEmitter<any>();
  @Output() PrevPage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  NextPageNumber(page: number)
  {
    this.NextPage.emit(++page);
  }

  BackPageNumber(page: number)
  {
    this.PrevPage.emit(--page);
  }
}
