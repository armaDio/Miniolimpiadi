import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AtletaDto } from "../models/atleta-dto.model";
import { AtletaStore } from "./atleta.store";

@Injectable()
export class SquadreService {
  constructor(private httpClient: HttpClient, private atletaStore: AtletaStore) { }
  public getAtletiSub(){
    return this.httpClient.get<AtletaDto[]>("http://localhost:3000/atleti");
  }

}
