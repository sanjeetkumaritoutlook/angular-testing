import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-my-button',
  template: `<button class="btn-primary">Click Me</button><h1>{{ text }}</h1>`,
  styles: [`.btn-primary { background-color: blue; color: white; }`]
})
export class MyButtonComponent {
  @Input() text: string = 'Default Title';
}
