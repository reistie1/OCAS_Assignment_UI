import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ActivityService } from 'src/services/activity.service';
import { OptionsComponentComponent } from './options-component.component';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('OptionsComponentComponent', () => {
  let component: OptionsComponentComponent;
  let fixture: ComponentFixture<OptionsComponentComponent>;
  let selectElement: HTMLSelectElement;
  let activityService: ActivityService;
  let formBuilder: FormBuilder;
  let scaleWidthSubject = new BehaviorSubject<{data: [{id: number, activityName: string}]}>({data:[{id: 1, activityName: 'tennis'}]});


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsComponentComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideComponent(OptionsComponentComponent, {
      set: {
        providers: [
          { provide: ActivityService, useValue: {
            GetActivityList(): Observable<{data: [{id: number, activityName: string}]}> {
              return scaleWidthSubject;
            }
          }},
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsComponentComponent);
    activityService = TestBed.inject(ActivityService);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    component.activitySelectionForm = formBuilder.group({
      activityId: new FormControl(null),
    })
    component.activitySelectionForm
    fixture.detectChanges();
  });

    it('data its successfully fetched for activity service', () => {
      expect(component.data).toEqual([{id: 1, activityName: 'tennis'}]);
    });

    it('calls on submit button when form submitted', () => {
      spyOn(component, 'onSubmit');

      const form = fixture.debugElement.query(By.css("form"));
      form.triggerEventHandler("ngSubmit", null);
      fixture.detectChanges();

      expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls event emitter emit function with selected activity', () => {
    const button = fixture.debugElement.query(By.css("button[type='submit']")).nativeElement;
    const form = fixture.debugElement.query(By.css("form"));
    spyOn(component.PassSelectedActivity, 'emit');

    selectElement = fixture.debugElement.query(By.css("select")).nativeElement;
    selectElement.value = selectElement.options[1].value;
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    button.dispatchEvent(new Event('click'));
    form.triggerEventHandler("ngSubmit", null);
    fixture.detectChanges();

    expect(component.PassSelectedActivity.emit).toHaveBeenCalledTimes(1);
  });

  it('router link has correct href', () => {
    const linkDebugEl = fixture.debugElement.query(By.css('a'));
    const routerLinkInstance = linkDebugEl.injector.get(RouterLinkWithHref);
    expect(routerLinkInstance['commands']).toEqual(['/']);
    expect(routerLinkInstance['href']).toEqual('/');
  })
});
