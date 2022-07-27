import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.sass']
})
export class CourseContainerComponent implements OnInit {
  public show:boolean = true;

  constructor() { }

  ngOnInit(): void {}

  toggleFn()
  {
    console.log(this.show)
    this.show = !this.show;
  }

}
