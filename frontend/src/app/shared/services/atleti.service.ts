import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { concatAll, delay, from, Observable, Subscription, throttle } from "rxjs";
import { AtletaDto } from "../models/atleta-dto.model";
import { AtletaStore } from "./atleta.store";

@Injectable()
export class AtletiService {
  constructor(private httpClient: HttpClient, private atletaStore: AtletaStore) { }

  public getAtleta(id:number){
    return this.httpClient.get<AtletaDto[]>("http://localhost:3000/atleti/"+id);
  }

  public getAtleti(){
    return this.httpClient.get<AtletaDto[]>("http://localhost:3000/atleti").subscribe(res => {this.atletaStore.init(res);console.log(res)})
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
    return this.httpClient.put("http://localhost:3000/atleti/"+atleta.id,atleta);
  }

  public edit_all(atleti:AtletaDto[]){
    atleti.forEach(element => {
      this.edit(element).subscribe();
    });
  }

}
