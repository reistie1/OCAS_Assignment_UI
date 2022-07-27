import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeacherFormComponent } from './edit-teacher-form.component';

describe('EditTeacherFormComponent', () => {
  let component: EditTeacherFormComponent;
  let fixture: ComponentFixture<EditTeacherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeacherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
