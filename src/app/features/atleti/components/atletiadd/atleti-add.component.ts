import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtletaDto } from '../../models/atleta-dto.model';
import { AtletiService } from '../../services/atleti.service';

@Component({
  selector: 'app-atletiadd',
  templateUrl: './atleti-add.component.html',
  styleUrls: ['./atleti-add.component.scss']
})
export class AtletiAddComponent implements OnInit {

  constructor(public atletiService:AtletiService,public router:ActivatedRoute) { }

  public atleta=new AtletaDto({});
  ngOnInit(): void {
  }

  public add(){
    if(!!this.atleta.name&& !!this.atleta.surname && !!this.atleta.nascita && !!this.atleta.sex)
      this.atletiService.add(this.atleta);
    else
      alert("Mancano alcuni parametri");
  }
}
