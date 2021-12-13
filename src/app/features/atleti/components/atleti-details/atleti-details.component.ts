import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { AtletaDto } from '../../models/atleta-dto.model';
import { AtletaStore } from '../../services/atleta.store';
import { AtletiService } from '../../services/atleti.service';

@Component({
  selector: 'app-atleti-details',
  templateUrl: './atleti-details.component.html',
  styleUrls: ['./atleti-details.component.scss']
})
export class AtletiDetailsComponent implements OnInit {

  public atleta!:AtletaDto;
  


  constructor(public atletaStore:AtletaStore,public route:Router, public actRoute:ActivatedRoute,public atletaService:AtletiService) { }

  ngOnInit(): void {
    this.atleta = this.atletaStore.get(this.actRoute.snapshot.params['id']);
  }

  saveChanges(item:any){
    this.atletaService.add(item);

  }

  public delete(){
    this.atletaService.delete(this.atleta.id);
    this.route.navigate(["atleti"]);
  }





}
