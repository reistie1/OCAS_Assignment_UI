import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivityService } from 'src/services/activity.service';
import { ActivitySignupComponent } from './activity-signup.component';

describe('ActivitySignupComponent', () => {
  let component: ActivitySignupComponent;
  let fixture: ComponentFixture<ActivitySignupComponent>;
  let scaleWidthSubject = new BehaviorSubject<{data: [{id: number, activityName: string}]}>({data:[{id: 1, activityName: 'tennis'}]});
  let RegisterResponse = new BehaviorSubject<{data: true}>({data: true});
  let activityService: ActivityService;
  let form: HTMLFormElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ ActivitySignupComponent ]
    })
    .overrideComponent(ActivitySignupComponent, {
      set: {
        providers: [
          { provide: ActivityService, useValue: {
            GetActivityList(): Observable<{data: [{id: number, activityName: string}]}> {
              return scaleWidthSubject;
            },
            RegisterForActivity() : Observable<{data: boolean}> {
              return RegisterResponse;
            }
          }
        },
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('first name validity', () => {
    let email = component.signupForm.controls['firstName'];
    let errors = email.errors ?? {};

    expect(errors['required']).toBeTruthy();
  });

  it('first name pattern validity', () => {
    component.signupForm.controls['firstName'].setValue("john%$$$");
    let errors = component.signupForm.controls['firstName'].errors ?? {};

    expect(errors['pattern']).toBeTruthy();
  });

  it('first name min length validity', () => {
    component.signupForm.controls['firstName'].setValue("j");
    let errors = component.signupForm.controls['firstName'].errors ?? {};

    expect(errors['minlength']).toBeTruthy();
  });

  it('first name max length validity', () => {
    component.signupForm.controls['firstName'].setValue("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdasadsdas");
    let errors = component.signupForm.controls['firstName'].errors ?? {};

    expect(errors['maxlength']).toBeTruthy();
  });

  it('last name validity', () => {
    let email = component.signupForm.controls['lastName'];
    let errors = email.errors ?? {};

    expect(errors['required']).toBeTruthy();
  });

  it('last name pattern validity', () => {
    component.signupForm.controls['lastName'].setValue("john%$$$");
    let errors = component.signupForm.controls['lastName'].errors ?? {};

    expect(errors['pattern']).toBeTruthy();
  });

  it('last name min length validity', () => {
    component.signupForm.controls['lastName'].setValue("j");
    let errors = component.signupForm.controls['lastName'].errors ?? {};

    expect(errors['minlength']).toBeTruthy();
  });

  it('last name max length validity', () => {
    component.signupForm.controls['lastName'].setValue("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdasadsdas");
    let errors = component.signupForm.controls['lastName'].errors ?? {};

    expect(errors['maxlength']).toBeTruthy();
  });

  it('gender validity', () => {
    let email = component.signupForm.controls['gender'];
    let errors = email.errors ?? {};

    expect(errors['required']).toBeTruthy();
  });

  it('gender validity of patter', () => {
    let email = component.signupForm.controls['gender'].setValue("Male123");
    let errors = component.signupForm.controls['gender'].errors ?? {}

    expect(errors['pattern']).toBeTruthy();
  });


  it('email validity', () => {
    let email = component.signupForm.controls['email'];
    let errors = email.errors ?? {};

    expect(errors['required']).toBeTruthy();
  });

  it('email validity of email pattern', () => {
    let email = component.signupForm.controls['email'].setValue("test");
    let errors = component.signupForm.controls['email'].errors ?? {}

    expect(errors['email']).toBeTruthy();
  });

  it('comments validity of patter', () => {
    let email = component.signupForm.controls['comments'].setValue("test description $%^^%");
    let errors = component.signupForm.controls['comments'].errors ?? {}

    expect(errors['pattern']).toBeTruthy();
  });

  it('select has two option', () => {
    let activityElement = fixture.debugElement.query(By.css("select")).nativeElement;

    expect(activityElement.options).toHaveSize(2);
  });

  it('submitting form calls onSubmit function', () => {
    spyOn(window.localStorage, "setItem");
    spyOn(component, "redirect");

    const button = fixture.debugElement.query(By.css("button[type='submit']")).nativeElement;
    const form = fixture.debugElement.query(By.css("form"));
    let selectEl = fixture.debugElement.query(By.css("select")).nativeElement;

    component.signupForm.controls['firstName'].setValue("test");
    component.signupForm.controls['lastName'].setValue("user")
    component.signupForm.controls['email'].setValue("test@gmail.com")
    component.signupForm.controls['gender'].setValue("Male")
    component.signupForm.controls['comments'].setValue("a simple comment for this event.")
    selectEl.value = selectEl.options[1].value;
    selectEl.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    button.dispatchEvent(new Event('click'));
    form.triggerEventHandler("ngSubmit", null);
    fixture.detectChanges();

    expect(component.signupForm.valid).toBeTruthy();
    expect(component.signupForm.controls['firstName'].value).toEqual("test");
    expect(component.signupForm.controls['lastName'].value).toEqual("user");
    expect(component.signupForm.controls['email'].value).toEqual("test@gmail.com");
    expect(component.signupForm.controls['comments'].value).toEqual("a simple comment for this event.");
    expect(selectEl.options[1].value).toMatch('1');
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
  });


});
