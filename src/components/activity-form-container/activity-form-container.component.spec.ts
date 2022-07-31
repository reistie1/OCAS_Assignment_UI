import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ActivityFormContainerComponent } from './activity-form-container.component';

describe('ActivityFormContainerComponent', () => {
  let component: ActivityFormContainerComponent;
  let fixture: ComponentFixture<ActivityFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isError starts false', () => {
    expect(component.isError).toBeFalsy();
  });

  it('set isError back to false after timeout', fakeAsync(() => {
    component.UpdateErrors(["some error here"])
    tick(2000);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.isError).toBeFalsy();
    })
  }));
});
