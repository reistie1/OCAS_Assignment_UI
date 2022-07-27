import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/services/course.service';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.sass']
})
export class CourseContainerComponent implements OnInit {
  public show:boolean = true;
  public data: Array<Course>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourseList("a0694c99-bbe6-42f4-88d5-13ebe5baa849").subscribe((response: any) => {
      this.data = response.data
    });
  }


  toggleFn()
  {
    console.log(this.show)
    this.show = !this.show;
  }

  doSomething(data: any)
  {
    this.data.concat(data);
    console.log(this.data);
  }

  toggleAnother(data: any)
  {
    this.show = !this.show;

  }

}
