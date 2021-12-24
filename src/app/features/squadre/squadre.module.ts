import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquadreComponent } from './squadre.component';
import { SquadreMenuComponent } from './components/squadre-menu/squadre-menu.component';
import { RouterModule } from '@angular/router';
import { SquadreRouter } from './squadre.router';
import { shared, shared_prov } from 'src/app/shared/shared.module';
import { materialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    SquadreComponent,
    SquadreMenuComponent
  ],
  imports: [
    CommonModule,
    SquadreRouter,
    RouterModule,
    materialModule,
    shared,
  ],
  providers:[
    shared_prov
  ]
})
export class SquadreModule { }