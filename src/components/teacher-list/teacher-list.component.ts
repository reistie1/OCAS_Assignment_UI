import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.sass']
})
export class TeacherListComponent implements OnInit {
  @Input("list") data: any[];
  @Output() updateParent = new EventEmitter<any>();
  @Output() sendDeleteTeacherId = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  handleEditTeacher(editTeacherData: any)
  {
    this.updateParent.emit(editTeacherData);
  }

  handleDeleteTeacher(teacherId: string)
  {
    this.sendDeleteTeacherId.emit(teacherId);
  }
}
