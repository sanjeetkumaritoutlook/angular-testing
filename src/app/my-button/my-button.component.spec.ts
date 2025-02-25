import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { render } from '@testing-library/angular';  //Jest specfic
import { MyButtonComponent } from './my-button.component';

describe('MyButtonComponent', () => {
  let component: MyButtonComponent;
  let fixture: ComponentFixture<MyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//snapshot testing using Jest  with TestBed
// describe('MyButtonComponent', () => {
//   let fixture: ComponentFixture<MyButtonComponent>;
//   let component: MyButtonComponent;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [MyButtonComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(MyButtonComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should match snapshot', () => {
//     expect(fixture.nativeElement.outerHTML).toMatchSnapshot();
//   });
// });

//snapshot testing using Jest  with render()
// describe('MyButtonComponent', () => {
//   it('should match snapshot', async () => {
//     const { container } = await render(MyButtonComponent);
//     expect(container).toMatchSnapshot();
//   });
// });
