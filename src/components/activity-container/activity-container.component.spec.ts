import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivityService } from 'src/services/activity.service';

import { ActivityContainerComponent } from './activity-container.component';

describe('ActivityContainerComponent', () => {
  let component: ActivityContainerComponent;
  let fixture: ComponentFixture<ActivityContainerComponent>;
  let activityService: ActivityService;
  let peopleActivityList = new BehaviorSubject<{data: [{id: number, firstName: string, lastName: string, email: string, activityId: string},{id: number, firstName: string, lastName: string, email: string, activityId: string},{id: number, firstName: string, lastName: string, email: string, activityId: string},{id: number, firstName: string, lastName: string, email: string, activityId: string}]}>({data:[
    {id: 1, firstName: 'johnny', lastName: 'smith', email: 'test@info.com', activityId: '1'},
    {id: 2, firstName: 'albert', lastName: 'hoffman', email: 'test1@info.com', activityId: '1'},
    {id: 3, firstName: 'roger', lastName: 'rabbit', email: 'test3@info.com', activityId: '1'},
    {id: 4, firstName: 'taylor', lastName: 'craig', email: 'test4@info.com', activityId: '1'}]
  });


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ActivityContainerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]

    })
    .overrideComponent(ActivityContainerComponent, {
      set: {
        providers: [
          { provide: ActivityService, useValue: {
            GetSignedUpActivityList(): Observable<{data: [{id: number, firstName: string, lastName: string, email: string, activityId: string},{id: number, firstName: string, lastName: string, email: string, activityId: string},{id: number, firstName: string, lastName: string, email: string, activityId: string},{id: number, firstName: string, lastName: string, email: string, activityId: string}]}> {
              return peopleActivityList;
            }
          }},
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('gets values from localStorage', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(function() {
			var param = arguments[0];

      if(param == "activityId")
      {
        return JSON.stringify({"activityId": "1"});
      }
      else
      {
        return JSON.stringify({"activityName": "Tennis"});
      }
		});

    component.ngOnInit();
    fixture.detectChanges();

    expect(localStorage.getItem).toHaveBeenCalledTimes(2);
    expect(component.activityName).toMatch("Tennis");
    expect(component.attendingActivityList).toEqual([
      {id: 1, firstName: 'johnny', lastName: 'smith', email: 'test@info.com', activityId: '1'},
      {id: 2, firstName: 'albert', lastName: 'hoffman', email: 'test1@info.com', activityId: '1'},
      {id: 3, firstName: 'roger', lastName: 'rabbit', email: 'test3@info.com', activityId: '1'},
      {id: 4, firstName: 'taylor', lastName: 'craig', email: 'test4@info.com', activityId: '1'}]);
  });
});
