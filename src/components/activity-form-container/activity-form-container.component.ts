import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-form-container',
  templateUrl: './activity-form-container.component.html',
  styleUrls: ['./activity-form-container.component.sass']
})
export class ActivityFormContainerComponent implements OnInit {
  errors: string[];
  isError: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  UpdateErrors(data: string[])
  {
    this.errors = data;
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 2000)
  }



}
