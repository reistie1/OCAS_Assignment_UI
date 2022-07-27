import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/models/Course';
import { CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  public deleteId: string;

  @Input('list') data: any[];
  @Output() DeleteCourseId = new EventEmitter();
  @Output() SetCourseToEdit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  SetDeleteCourseId(courseId: string)
  {
    this.DeleteCourseId.emit(courseId);
  }

  SetEditableCourse(data: any)
  {
    this.SetCourseToEdit.emit(data);
  }



}
