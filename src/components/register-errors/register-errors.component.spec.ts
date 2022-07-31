import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RegisterErrorsComponent } from './register-errors.component';

describe('RegisterErrorsComponent', () => {
  let component: RegisterErrorsComponent;
  let fixture: ComponentFixture<RegisterErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("take input errors and sets them correctly", () => {
    component.errors = ["first name too long", "last name too long"];
    fixture.detectChanges();
    let errorsEl = fixture.debugElement.queryAll(By.css("p"));

    expect(component.errors).toEqual(["first name too long", "last name too long"]);
    expect(errorsEl).toHaveSize(2)
    expect(errorsEl[0].nativeElement.innerHTML).toMatch("first name too long");
    expect(errorsEl[1].nativeElement.innerHTML).toMatch("last name too long");
  });
});
