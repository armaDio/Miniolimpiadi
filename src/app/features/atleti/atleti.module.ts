import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtletiDetailsComponent } from './components/atleti-details/atleti-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { materialModule } from 'src/app/shared/material.module';
import { MatListModule } from '@angular/material/list';
import { AtletiRouter } from './atleti.router';
import { AtletaStore } from './services/atleta.store';
import { AtletiService } from './services/atleti.service';
import { AtletiComponent } from './atleti.component';
import { AtletiListComponent } from './components/atleti-list/atleti-list.component';
import { RouterModule } from '@angular/router';
import { shared } from 'src/app/shared/shared.module';
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
    MatListModule
  ],
  providers:[
    AtletaStore,
    AtletiService
  ],
  exports:[

  ]
})
export class AtletiModule { }
