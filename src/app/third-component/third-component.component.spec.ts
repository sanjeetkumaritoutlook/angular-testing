import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ThirdComponentComponent } from './third-component.component';
import { UserService } from '../user.service';
describe('ThirdComponentComponent', () => {
  let component: ThirdComponentComponent;
  let fixture: ComponentFixture<ThirdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ThirdComponentComponent],
        providers: [UserService],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
