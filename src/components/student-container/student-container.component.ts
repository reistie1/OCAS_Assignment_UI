import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.sass']
})
export class StudentContainerComponent implements OnInit {
  data: Array<Student>

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentList("a0694c99-bbe6-42f4-88d5-13ebe5baa849").subscribe((response: any) => {
      console.log(response.data);
      this.data = response.data
    });
  }

}
