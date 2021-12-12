import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletiComponent } from './features/atleti-component/atleti.component';

const routes: Routes = [
  { path: 'atleti', component: AtletiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
