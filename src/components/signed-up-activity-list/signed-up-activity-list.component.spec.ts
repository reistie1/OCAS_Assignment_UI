import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SignedUpActivityListComponent } from './signed-up-activity-list.component';

describe('SignedUpActivityListComponent', () => {
  let component: SignedUpActivityListComponent;
  let fixture: ComponentFixture<SignedUpActivityListComponent>;
  let tableRowEl: DebugElement;
  let titleEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignedUpActivityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignedUpActivityListComponent);
    component = fixture.componentInstance;
    component.name = "Tennis";
    component.people = [{id: 1, firstName: 'josh', lastName: 'reist', activityId: 1, comments: 'a nice description goes here', email: 'test@info.com', gender: 'Male', signedUpDate:'2022-01-23'}];
    tableRowEl = fixture.debugElement.query(By.css('tbody'));
    titleEl = fixture.debugElement.query(By.css('h1'));
    fixture.detectChanges();
  });

  it('shows the appropriate title', () => {
    let titleContent = titleEl.nativeElement
    expect(titleContent.innerHTML).toMatch("Tennis");
  });

  it('shows the correct amount of input rows', () => {
    expect(tableRowEl.children).toHaveSize(1);
    expect(tableRowEl.children[0].childNodes).toHaveSize(6);
  });

  it('row data in displayed correct data according to input', () => {
    expect(tableRowEl.children[0].children[0].nativeElement.innerHTML).toMatch('josh');
    expect(tableRowEl.children[0].children[1].nativeElement.innerHTML).toMatch('reist');
    expect(tableRowEl.children[0].children[2].nativeElement.innerHTML).toMatch('test@info.com');
    expect(tableRowEl.children[0].children[3].nativeElement.innerHTML).toMatch('Male');
    expect(tableRowEl.children[0].children[4].nativeElement.innerHTML).toMatch('2022-01-23');
    expect(tableRowEl.children[0].children[5].nativeElement.innerHTML).toMatch('a nice description goes here');
  });

  it('fires next and back functions', () => {
    spyOn(component, "NextPageNumber")
    spyOn(component, "BackPageNumber")

    let buttonEl = fixture.debugElement.queryAll(By.css('.footer-option'));
    buttonEl[0].nativeElement.dispatchEvent(new Event('click'));
    buttonEl[1].nativeElement.dispatchEvent(new Event('click'));

    expect(buttonEl).toHaveSize(2);
    expect(component.NextPageNumber).toHaveBeenCalled();
    expect(component.BackPageNumber).toHaveBeenCalled();

  });
});
