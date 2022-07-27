import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-component',
  templateUrl: './notification-component.component.html',
  styleUrls: ['./notification-component.component.sass']
})
export class NotificationComponentComponent implements OnInit {
  @Input("message") message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
