import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/models/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {

  @Input('list') data: any[]


  constructor() { }

  ngOnInit(): void {
  }

}
