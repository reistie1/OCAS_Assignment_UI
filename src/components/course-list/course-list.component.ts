import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/models/Course';
import { CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  @Input() toggle: () => void
  @Output() updateToggle = new EventEmitter();

  constructor() {}

  @Input('list') data: any[];



  ngOnInit(): void {

    console.log(this.data);
  }

  clickFn() {

    this.toggle();
  }



}
