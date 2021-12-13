import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaStore } from '../../services/atleta.store';
import { AtletiService } from '../../services/atleti.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-atleti-list',
  templateUrl: './atleti-list.component.html',
  styleUrls: ['./atleti-list.component.scss']
})
export class AtletiListComponent implements OnInit {

  constructor(public router:Router, public atletaStore: AtletaStore, public atletaService:AtletiService) { }

  ngOnInit(): void {
    this.atletaService.getAtleti();
  }
  
  public showDetails(id:number){
    this.router.navigate(["atleti", "details", id]);
  }

  public addNew(){
    this.router.navigate(["atleti", "add"]);
  }

}
