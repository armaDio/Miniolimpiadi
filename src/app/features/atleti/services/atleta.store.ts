import { Injectable } from "@angular/core";
import { AtletaDto } from "../models/atleta-dto.model";

@Injectable()
export class AtletaStore{
    get(id: number): AtletaDto {
      let at = this.atleti.find(function(node) {
        return node.id==id;
      });
      if(at == undefined){
        throw new Error("unable to find atleta with that id");
      }
      return at;
    }
    public atleti:AtletaDto[] = [];

    public delete(id:number){
      const index = this.atleti.findIndex((atleta:AtletaDto) => atleta.id === id);
      this.atleti.splice(index,1);
    }

    public init(res:AtletaDto[]){
        this.atleti = res;
    }

    public add(item:AtletaDto){
      this.atleti.push(item);
    }

    
}