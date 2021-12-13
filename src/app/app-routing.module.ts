import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'atleti',
    loadChildren: () => import('./features/atleti/atleti.module').then(res => res.AtletiModule)
  },{
    path:'',
    loadChildren: () => import('./features/atleti/atleti.module').then(res => res.AtletiModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
