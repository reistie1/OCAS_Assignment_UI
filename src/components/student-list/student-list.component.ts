import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  @Input('list') data: any[]
  @Output() PassEditValue = new EventEmitter<any>();
  @Output() PassDeleteValue = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  PassEditValueToParent(data: any)
  {
    console.log(data);
    this.PassEditValue.emit(data);
  }

  PassDeleteValueToParent(data: any)
  {
    this.PassDeleteValue.emit(data);
  }

}
