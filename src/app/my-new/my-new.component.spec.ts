//import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen } from '@testing-library/angular';

import { MyNewComponent } from './my-new.component';

//with old jasmine and karma  
// describe('MyNewComponent', () => {
//   let component: MyNewComponent;
//   let fixture: ComponentFixture<MyNewComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [MyNewComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(MyNewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

//Jest test case
describe('MyNewComponent', () => {
  it('should render the title', async () => {
    await render(MyNewComponent);
    expect(screen.getByText('Hello Jest!')).toBeTruthy();
  });
});