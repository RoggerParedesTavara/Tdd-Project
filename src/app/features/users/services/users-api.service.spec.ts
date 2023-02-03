import { TestBed } from '@angular/core/testing';
import { MOCK_USERS_RESPONSE } from '../helpers/mock-users-response';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersApiService } from './users-api.service';
import { IUsersResponse } from '../types/IUsersResponse';
import { environment } from 'src/environments/environment';

describe('UsersApiService', () => {
  let service: UsersApiService;
  let controller: HttpTestingController;
  let getUsersUrl = environment.usersUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    
    service = TestBed.inject(UsersApiService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers should return IUsersResponse interface array',()=>{
    const mockResponse = MOCK_USERS_RESPONSE;    
    service.getUsers().subscribe((users: IUsersResponse[])=>{
      expect(users).toEqual(mockResponse);
    })
    const req = controller.expectOne(getUsersUrl);
    req.flush(mockResponse);
  });

  it('getUsers should be of type GET', ()=>{
    const mockResponse = MOCK_USERS_RESPONSE;    
    service.getUsers().subscribe((users: IUsersResponse[])=>{
      expect(users).toEqual(mockResponse);
    })
    const req = controller.expectOne(getUsersUrl);
    expect(req.request.method).toBe('GET');
  });

  //TODO: test errores


});
