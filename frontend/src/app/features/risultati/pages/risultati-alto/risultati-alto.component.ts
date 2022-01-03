import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AtletaDto } from './../../../../shared/models/atleta-dto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaStore } from 'src/app/shared/services/atleta.store';
import { AtletiService } from 'src/app/shared/services/atleti.service';

@Component({
  selector: 'app-risultati-alto',
  templateUrl: './risultati-alto.component.html',
  styleUrls: ['./risultati-alto.component.scss']
})
export class RisultatiAltoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public router:Router, public atletaStore: AtletaStore, public atletaService:AtletiService) { }
  public formGroup!: FormGroup;
  public atletaList!: AtletaDto[];
  public atletaFiltered: AtletaDto[] = [];

  ngOnInit(): void {
    this.atletaService.getAtletiSub().subscribe(res => {
      this.atletaList = Object.values(res);
    });
    this.formGroup = this.formBuilder.group({
      sex: [{},Validators.required],
      nascita:[{},Validators.required],
    })
  }

  public filtraAtleti(){
    this.atletaFiltered = [];
    this.atletaList.forEach( atl =>{
     // if(atl.sex ===  )
    })

  }



}
