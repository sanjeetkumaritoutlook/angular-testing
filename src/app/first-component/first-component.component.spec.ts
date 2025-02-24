import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './first-component.component';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstComponentComponent); // Creates a test instance
    component = fixture.componentInstance; // Gets the component's instance
    fixture.detectChanges(); // Runs change detection to initialize data binding
                     //Triggers Angular's change detection to update the component's view and bindings.
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.title).toBe('Hello Angular Testing first component!');
  });

});
