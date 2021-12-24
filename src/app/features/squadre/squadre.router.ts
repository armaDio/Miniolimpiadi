import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SquadreMenuComponent } from "./components/squadre-menu/squadre-menu.component";
import { SquadreComponent } from "./squadre.component";

const routes: Routes = [{
    path: '',
    component:SquadreComponent,
    children:[
    {
      path:'',
      component:SquadreMenuComponent
    }
      
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class SquadreRouter {}