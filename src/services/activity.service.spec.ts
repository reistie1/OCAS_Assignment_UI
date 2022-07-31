import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivityService } from './activity.service';
import { requestParameters } from 'src/models/requestParameters';

describe('ActivityService', () => {
  let injector: TestBed;
  let service: ActivityService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ], providers: [ ActivityService ] });
    injector = getTestBed();
    service = injector.inject(ActivityService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getActivityList() returns data', () => {
    const dummyActivityList = {
      succeeded: true,
      data: [
        { id: 1, activityName: 'floor hockey' },
        { id: 2, activityName: 'tennis' },
        { id: 3, activityName: 'football' },
      ],
      errors: null
    };

    service.GetActivityList().subscribe((res) => {
      expect(res).toEqual(dummyActivityList);
    });

    const req = httpMock.expectOne('https://localhost:7280/api/v1/Activity');
    expect(req.request.method).toBe('GET');
    req.flush(dummyActivityList);

  });

  it('RegisterForActivity() returns success response', () => {
    service.RegisterForActivity({id: '', firstName: 'johnny', lastName: 'rogers', comments: "sample comment", email: 'test@test.com', gender: 'male', signedUpDate: '2022-02-12', 'activityId': '1'}).subscribe((res) => {
      expect(res).toEqual({data: true, succeeded: true, errors: null});
    });

    const req = httpMock.expectOne('https://localhost:7280/api/v1/Activity');
    expect(req.request.method).toBe('POST');
    req.flush({ data: true, succeeded: true, errors: null });
  });

  it('GetSignedUpActivityList() returns signed up list of people for activity', () => {
    const signUpListResponse =
    {
      succeeded: true,
      data: [
        {id: 1, firstName: 'josh', lastName: 'spinach', comments: '', activityId: 1, email: 'test1@info.com'},
        {id: 2, firstName: 'roger', lastName: 'rabbit', comments: 'looking forward to it', activityId: 1, email: 'test2@info.com'},
        {id: 3, firstName: 'lisa', lastName: 'sherbert', comments: '', activityId: 1, email: 'test3@info.com'}
      ],
      errors: null
    }

    service.GetSignedUpActivityList('1', new requestParameters(1, 50)).subscribe((res: any) => {
      expect(res).toEqual(signUpListResponse);
      expect(res.data).toHaveSize(3);
    });

    const req = httpMock.expectOne('https://localhost:7280/api/v1/Activity/1?pageNumber=1&pageSize=50');
    expect(req.request.method).toBe('GET');
    req.flush(signUpListResponse);
  });
});
