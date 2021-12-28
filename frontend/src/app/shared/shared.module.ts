import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AtletaStore } from './services/atleta.store';
import { AtletiService } from './services/atleti.service';



export const shared= [
  HttpClientModule,
  ReactiveFormsModule
  ]

export const shared_prov=[
  AtletaStore,
  AtletiService
]