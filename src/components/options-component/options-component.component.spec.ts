import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ActivityService } from 'src/services/activity.service';

import { OptionsComponentComponent } from './options-component.component';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OptionsComponentComponent', () => {
  let component: OptionsComponentComponent;
  let fixture: ComponentFixture<OptionsComponentComponent>;
  let http: HttpClient;
  let activityService: ActivityService;
  let formBuilder: FormBuilder;
  let scaleWidthSubject = new BehaviorSubject<{data: [{id: number, activityName: string}]}>({data:[{id: 1, activityName: 'tennis'}]});


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsComponentComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
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
    fixture.detectChanges();
  });

  it('data its successfully fetched for activity service', () => {
    expect(component.data).toEqual([{id: 1, activityName: 'tennis'}]);
  });
});
