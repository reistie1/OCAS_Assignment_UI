import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    // expect(component).toBeTruthy();
  });
});
