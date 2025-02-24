import { Component } from '@angular/core';

@Component({
  selector: 'app-my-new',
  template: `<h1>{{ title }}</h1>`,
  styleUrl: './my-new.component.scss'
})
export class MyNewComponent {
  title = 'Hello Jest!';
}
