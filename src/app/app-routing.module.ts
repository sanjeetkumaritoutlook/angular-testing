import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { MyNewComponent } from './my-new/my-new.component';
const routes: Routes = [
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'second-component', component: SecondComponentComponent },
  { path: 'third-component', component: ThirdComponentComponent },
  { path: 'my-new', component: MyNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
