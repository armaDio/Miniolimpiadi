import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtletaDto } from '../../../../shared/models/atleta-dto.model';
import { AtletiService } from '../../../../shared/services/atleti.service';

@Component({
  selector: 'app-atletiadd',
  templateUrl: './atleti-add.component.html',
  styleUrls: ['./atleti-add.component.scss']
})
export class AtletiAddComponent implements OnInit {

  constructor(public atletiService:AtletiService,public router:Router) { }

  public atleta=new AtletaDto({});
  ngOnInit(): void {
  }

  public add(){
    if(!!this.atleta.name&& !!this.atleta.surname && !!this.atleta.nascita && !!this.atleta.sex)
      this.atletiService.add(this.atleta);
    else
      alert("Mancano alcuni parametri");
  }

  public close(){
    this.router.navigate(["atleti"])

  }
}
