import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedUpActivityListComponent } from './signed-up-activity-list.component';

describe('SignedUpActivityListComponent', () => {
  let component: SignedUpActivityListComponent;
  let fixture: ComponentFixture<SignedUpActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignedUpActivityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignedUpActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
