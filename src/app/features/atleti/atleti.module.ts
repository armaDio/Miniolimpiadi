import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtletiDetailsComponent } from './components/atleti-details/atleti-details.component';
import { materialModule } from 'src/app/shared/material.module';
import { AtletiRouter } from './atleti.router';
import { AtletaStore } from '../../shared/services/atleta.store';
import { AtletiService } from '../../shared/services/atleti.service';
import { AtletiComponent } from './atleti.component';
import { AtletiListComponent } from './components/atleti-list/atleti-list.component';
import { RouterModule } from '@angular/router';
import { shared, shared_prov } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AtletiAddComponent } from './components/atletiadd/atleti-add.component';

@NgModule({
  declarations: [
    AtletiComponent,
    AtletiListComponent,
    AtletiDetailsComponent,
    AtletiAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AtletiRouter,
    RouterModule,
    materialModule,
    shared,
  ],
  providers:[
    shared_prov
  ],
  exports:[

  ]
})
export class AtletiModule { }
