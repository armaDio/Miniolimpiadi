import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { debounceTime, delay, distinctUntilChanged, Observable, Subscription, tap } from 'rxjs';
import { AtletaDto } from 'src/app/shared/models/atleta-dto.model';
import { AtletaStore } from '../../../../shared/services/atleta.store';
import { AtletiService } from '../../../../shared/services/atleti.service';

@Component({
  selector: 'app-atleti-details',
  templateUrl: './atleti-details.component.html',
  styleUrls: ['./atleti-details.component.scss']
})
export class AtletiDetailsComponent implements OnInit, OnDestroy {

  public atletaForm!: FormGroup;
  public atleta:AtletaDto = new AtletaDto();
  public minDate: Date;
  public maxDate: Date;
  public haschanged:boolean= false;

  constructor(private formBuilder: FormBuilder, public atletaStore:AtletaStore,public route:Router, public actRoute:ActivatedRoute,public atletaService:AtletiService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 14, 0, 1);
    this.maxDate = new Date(currentYear - 6, 11, 31);
   }


  ngOnInit(): void {
    this.atletaForm = this.formBuilder.group(
      {
        name: [{}, Validators.required],
        team: [{value: "",disabled: true}],
        surname: [{},Validators.required],
        sex: [{},Validators.required],
        nascita:[{},Validators.required]
      });
    this.atletaService.getAtleta(this.actRoute.snapshot.params['id']).subscribe(res => {
      this.atleta= res[0];
      this.atletaForm.setValue({
        name:this.atleta.name,
        surname:this.atleta.surname,
        sex:this.atleta.sex,
        nascita:this.atleta.nascita,
        team:this.atleta.team || "   "
      })
      });
      this.atletaForm.valueChanges.pipe(debounceTime(2000),distinctUntilChanged(),tap(()=>this.haschanged=true)).subscribe((val: AtletaDto) => {
        if(this.atletaForm.valid){
          val.id= this.atleta.id;
          this.atleta= val;

          this.saveChanges(this.atleta);
        }
      });
    }

  saveChanges(item:AtletaDto){
    if(this.haschanged){
      this.atletaService.edit(item).subscribe(res => {
        this.atletaStore.delete(item.id);
        this.haschanged=false;
        this.atletaStore.add(item);
      })
    }
  }

  ngOnDestroy(){
    this.saveChanges(this.atleta);
  }

  public delete(){
    this.atletaService.delete(this.atleta.id);
    this.route.navigate(["atleti"]);
  }

}
