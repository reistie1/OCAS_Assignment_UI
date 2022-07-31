import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signed-up-activity-list',
  templateUrl: './signed-up-activity-list.component.html',
  styleUrls: ['./signed-up-activity-list.component.sass']
})
export class SignedUpActivityListComponent implements OnInit {
  name: string;
  public pageSize: number = 50;
  @Input("attending") people: any[];
  @Input("pageNumber") pageNumber: number;
  @Output() NextPage = new EventEmitter<any>();
  @Output() PrevPage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  NextPageNumber(page: number)
  {
    console.log(++page);
    this.NextPage.emit(page);
  }

  BackPageNumber(page: number)
  {
    console.log(--page);
    this.PrevPage.emit(page);
  }

}
