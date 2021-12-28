import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtletaStore } from 'src/app/shared/services/atleta.store';
import { AtletaDto } from '../../../../shared/models/atleta-dto.model';
import { AtletiService } from '../../../../shared/services/atleti.service';

@Component({
  selector: 'app-atletiadd',
  templateUrl: './atleti-add.component.html',
  styleUrls: ['./atleti-add.component.scss']
})
export class AtletiAddComponent implements OnInit {
  public atletaForm!: FormGroup;
  public atleta:AtletaDto = new AtletaDto();
  public minDate: Date;
  public maxDate: Date;


  constructor(private formBuilder: FormBuilder, public atletaStore:AtletaStore, public actRoute:ActivatedRoute,public atletaService:AtletiService,public router:Router) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 14, 0, 1);
    this.maxDate = new Date(currentYear - 6, 11, 31);
  }

  ngOnInit(): void {
    this.atletaForm = this.formBuilder.group(
      {
        name: [{},Validators.required],
        surname: [{},Validators.required],
        sex: [{},Validators.required],
        nascita:[{},Validators.required],
      });
      this.atletaForm.setValue({
        name:"",
        surname:"",
        sex:"",
        nascita:""
      })
  }

  public add(){
    if(this.atletaForm.valid){
      this.atleta = this.atletaForm.value
      this.atleta.pettorale = 0;
      this.atletaService.add(this.atleta);
      this.close();
    }
  }

  public close(){
    this.router.navigate(["atleti"])
  }
}
