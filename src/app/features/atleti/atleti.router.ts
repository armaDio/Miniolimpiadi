import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtletiComponent } from "./atleti.component";
import { AtletiDetailsComponent } from "./components/atleti-details/atleti-details.component";
import { AtletiListComponent } from "./components/atleti-list/atleti-list.component";
import { AtletiAddComponent } from "./components/atletiadd/atleti-add.component";

const routes: Routes = [{
    path: '',
    component:AtletiComponent,
    children:[
      {
        path: 'details/:id',
        component:AtletiDetailsComponent
      },{
        path: '',
        component:AtletiListComponent
      },{
        path: 'list',
        component:AtletiListComponent
      },{
        path: 'add',
        component:AtletiAddComponent
      }
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class AtletiRouter {}