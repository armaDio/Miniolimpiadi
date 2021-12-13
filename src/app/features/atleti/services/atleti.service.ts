import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AtletaDto } from "../models/atleta-dto.model";
import { AtletaStore } from "./atleta.store";

@Injectable()
export class AtletiService {
 
  constructor(private httpClient: HttpClient, private atletaStore: AtletaStore) { }

  public getAtleti(){
    return this.httpClient.get<AtletaDto[]>("http://localhost:3000/atleti").subscribe(res => this.atletaStore.init(res))
  }

  public delete(id:number){
    return this.httpClient.delete("http://localhost:3000/atleti/"+id).subscribe(()=> {
      this.atletaStore.delete(id);
    });
  }
  
  public add(atleta:AtletaDto){
     this.httpClient.post("http://localhost:3000/atleti",atleta).subscribe();
     this.atletaStore.add(atleta);
  }

  public edit(atleta:AtletaDto){
    this.httpClient.post("http://localhost:3000/atleti/"+atleta.id,atleta).subscribe();
    this.atletaStore.delete(atleta.id);
    this.atletaStore.add(atleta);
  }

}
