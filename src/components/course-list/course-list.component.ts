import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/models/Course';
import { CourseService } from 'src/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  data: any;


  @Input() toggle: () => void
  @Output() updateToggle = new EventEmitter();

  constructor(private courseService: CourseService) {}


  ngOnInit(): void {
    this.courseService.getCourseList("a0694c99-bbe6-42f4-88d5-13ebe5baa849").subscribe((response: any) => {
      this.data = response.data
    });
    console.log(this.data);
  }

  clickFn() {
    console.log("called");
    this.toggle();
  }



}
