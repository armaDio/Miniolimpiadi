import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, from, Observable, Subscription } from "rxjs";
import { AtletaDto } from "../models/atleta-dto.model";
import { AtletaStore } from "./atleta.store";

@Injectable()
export class AtletiService {
  constructor(private httpClient: HttpClient, private atletaStore: AtletaStore) { }

  public getAtleta(id:number){
    return this.httpClient.get<AtletaDto>("http://localhost:3000/atleti/"+id);
  }

  public getAtleti(){
    return this.httpClient.get<AtletaDto[]>("http://localhost:3000/atleti").subscribe(res => this.atletaStore.init(res))
  }

  public getAtletiSub(){
    return this.httpClient.get<AtletaDto[]>("http://localhost:3000/atleti");
  }

  public delete(id:number){
    return this.httpClient.delete("http://localhost:3000/atleti/"+id).subscribe(()=> {
      this.atletaStore.delete(id);
    });
  }
  public deleteSub(id:number){
    return this.httpClient.delete("http://localhost:3000/atleti/"+id);
  }
  public addSub(atleta:AtletaDto){
    return  this.httpClient.post("http://localhost:3000/atleti",atleta);
  }
  
  public add(atleta:AtletaDto){
     this.httpClient.post("http://localhost:3000/atleti",atleta).subscribe(
     res=>this.atletaStore.add(atleta)
     );
  }

  public edit(atleta:AtletaDto){
    this.httpClient.put("http://localhost:3000/atleti/"+atleta.id,atleta).subscribe();
    this.atletaStore.delete(atleta.id);
    this.atletaStore.add(atleta);
  }

  public edit_all(atleti:AtletaDto[]){
    atleti.forEach(element => {
      this.deleteSub(element.id).pipe(delay(3000)).subscribe(res => {
        console.log("removing " + element.id);
        this.addSub(element).pipe(delay(3000)).subscribe(r => console.log("Adding " + element.id))
      });
      
    });
  }

}
