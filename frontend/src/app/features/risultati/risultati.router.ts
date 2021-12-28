import { RisultatiMezzofondoComponent } from './pages/risultati-mezzofondo/risultati-mezzofondo.component';
import { RisultatiVortexComponent } from './pages/risultati-vortex/risultati-vortex.component';
import { RisultatiPesoComponent } from './pages/risultati-peso/risultati-peso.component';
import { RisultatiStaffettaComponent } from './pages/risultati-staffetta/risultati-staffetta.component';

import { RisultatiMenuComponent } from './risultati-menu/risultati-menu.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RisultatiComponent } from './risultati.component';
import { RisultatiVelocitaComponent } from './pages/risultati-velocita/risultati-velocita.component';
import { RisultatiLungoComponent } from './pages/risultati-lungo/risultati-lungo.component';
import { RisultatiArcoComponent } from './pages/risultati-arco/risultati-arco.component';
import { RisultatiAltoComponent } from './pages/risultati-alto/risultati-alto.component';
import { RisultatiFreccetteComponent } from './pages/risultati-freccette/risultati-freccette.component';

const routes: Routes = [{
    path: '',
    component:RisultatiComponent,
    children:[
    {
      path:'',
      component:RisultatiMenuComponent
    },
    {
      path:'staffetta',
      component:RisultatiStaffettaComponent
    },
    {
      path:'velocita',
      component:RisultatiVelocitaComponent
    },
    {
      path:'peso',
      component:RisultatiPesoComponent
    },
    {
      path:'vortex',
      component:RisultatiVortexComponent
    },
    {
      path:'mezzofondo',
      component:RisultatiMezzofondoComponent
    },
    {
      path:'lungo',
      component:RisultatiLungoComponent
    },
    {
      path:'arco',
      component:RisultatiArcoComponent
    },
    {
      path:'alto',
      component:RisultatiAltoComponent
    },
    {
      path:'freccette',
      component:RisultatiFreccetteComponent
    }

    ]
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class RisultatiRouter {}
