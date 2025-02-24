import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpClient = TestBed.inject(HttpClient);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //This test ensures that getUser() was called at least once.
  it('should spy on getUser()', () => {
    spyOn(service, 'getUser'); // 🔹 Spy on getUser method

    service.getUser(); // Call the method

    expect(service.getUser).toHaveBeenCalled(); // Check if it was called in third coponent
  });

  //Instead of using HttpTestingController, we can spy on HttpClient.get().
  //This ensures your tests don't call real APIs while still verifying behavior.
  it('should fetch posts using spyOn()', () => {
    const mockPosts = [{ id: 1, title: 'Test Post' }];

    // Spy on `HttpClient.get()` and return mock data
    spyOn(httpClient, 'get').and.returnValue(of(mockPosts));

    service.getPosts().subscribe((posts) => {
      expect(posts).toEqual(mockPosts); // Check mocked response
    });

    expect(httpClient.get).toHaveBeenCalledTimes(1); // Ensure GET was called once
    expect(httpClient.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts'); // ✅ Ensure correct URL was used
  });

});
