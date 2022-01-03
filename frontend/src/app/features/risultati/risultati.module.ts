import { RisultatiComponent } from './risultati.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RisultatiMenuComponent } from './risultati-menu/risultati-menu.component';
import { RisultatiRouter } from './risultati.router';
import { RouterModule } from '@angular/router';
import { materialModule } from 'src/app/shared/material.module';
import { shared, shared_prov } from 'src/app/shared/shared.module';
import { RisultatiStaffettaComponent } from './pages/risultati-staffetta/risultati-staffetta.component';
import { RisultatiVelocitaComponent } from './pages/risultati-velocita/risultati-velocita.component';
import { RisultatiPesoComponent } from './pages/risultati-peso/risultati-peso.component';
import { RisultatiVortexComponent } from './pages/risultati-vortex/risultati-vortex.component';
import { RisultatiMezzofondoComponent } from './pages/risultati-mezzofondo/risultati-mezzofondo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RisultatiComponent,
    RisultatiMenuComponent,
    RisultatiStaffettaComponent,
    RisultatiVelocitaComponent,
    RisultatiPesoComponent,
    RisultatiVortexComponent,
    RisultatiMezzofondoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RisultatiRouter,
    RouterModule,
    materialModule,
    shared,
  ],
  providers:[
    shared_prov
  ]
})
export class RisultatiModule { }
