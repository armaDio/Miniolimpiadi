import { Component, OnInit } from '@angular/core';
import { AtletiService } from 'src/app/shared/services/atleti.service';
import { AtletaDto } from '../../../../shared/models/atleta-dto.model';
import { SquadreService } from '../../../../shared/services/squadre.service';

export enum category{
  seniores="SE",
  juniores="JU",
  pulcini="PU",
  giovanissimi="GI"
}
@Component({
  selector: 'app-squadre-menu',
  templateUrl: './squadre-menu.component.html',
  styleUrls: ['./squadre-menu.component.scss']
})
export class SquadreMenuComponent implements OnInit {
  public atleti!: AtletaDto[];

  public atlByInfo:Map<AtletaDto, category>=new Map();
  public squadre:Map<AtletaDto,string> = new Map();

  constructor(public atletiService:AtletiService) { }

  public generated=true;

  ngOnInit(): void {
    this.atletiService.getAtletiSub().subscribe(res=> {
      this.atleti = res;
      res.forEach( e =>{
          this.generated = this.generated && (e.team == "Rossi" ||e.team == "Blu" ||e.team == "Gialli" || e.team == "Verdi");
        }
      )
    });
  }

  private leastFrequent(arr:string[], n:number)
  {
      var hash = new Map();
      hash.set("Rossi",0);
      hash.set("Verdi",0);
      hash.set("Gialli",0);
      hash.set("Blu",0);
      for (var i = 0; i < n; i++)
      {
          if(hash.has(arr[i]))
              hash.set(arr[i], hash.get(arr[i])+1)
          else
              hash.set(arr[i], 1);
      }
   
      // find the min frequency
      var min_count = n+1, res = -1;
   
      hash.forEach((value, key) => {
          if (min_count >= value) {
              res = key;
              min_count = value;
          }
      });
   
      return res;
  }


  public startingTeam():any{
    console.warn(Array.from(this.squadre.values()));console.warn(Array.from(this.squadre.values()).length);
    return this.leastFrequent(Array.from(this.squadre.values()) ,Array.from(this.squadre.values()).length);
  }

  public generateTeams(){
    this.atleti.forEach(element => {
      switch(new Date().getFullYear()-new Date(element.nascita).getFullYear()){
        case 5:
        case 6:
        case 7:
          this.atlByInfo.set(element, category.pulcini);
          break;
        case 8:
        case 9:
          this.atlByInfo.set(element, category.giovanissimi);
          break;
        case 11:
        case 12:
          this.atlByInfo.set(element, category.juniores);
          break;
        case 13:
        case 14:
        case 15:
        default:
            this.atlByInfo.set(element, category.seniores);
            break;
      }
    });
    
    this.assignCatSex(category.pulcini,"M");
    this.assignCatSex(category.giovanissimi,"M");
    this.assignCatSex(category.juniores,"M");
    this.assignCatSex(category.seniores,"M");
    
    
    this.assignCatSex(category.pulcini,"F");
    this.assignCatSex(category.giovanissimi,"F");
    this.assignCatSex(category.juniores,"F");
    this.assignCatSex(category.seniores,"F");

    //this.saveData();
  }
  saveData() {
    this.atletiService.edit_all(this.atleti);
  }


  assignCatSex(cat: category, sex: string) {
    let t= ["Rossi","Gialli","Verdi","Blu"];
    let team = this.startingTeam();
    let idx = team==-1?0:t.indexOf(team);
    this.getOneCategory(cat,sex).forEach((el)=>{
      this.squadre.set(el,t[idx]);
      idx = (idx+1)%t.length;
    });
    this.updateSquadre();
  }

  assignPettorali(){
    let r =0, b = 0,g =0, v =0;
    Array.from(this.squadre.keys())
  }

  private shuffle(array:[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  updateSquadre() {
    Array.from(this.squadre.entries()).forEach(element => {
      let index = this.atleti.findIndex(val=> {
        return val.id == element[0].id;
      });
      this.atleti[index]=element[0];
      this.atleti[index].team=element[1];
      //this.atletiService.edit(this.atleti[index]);
    });  
    this.saveData();
  }

private getOneCategory(categ: category, arg1: string) {
  let temp:AtletaDto[] = [];
  Array.from(this.atlByInfo.entries()).forEach((el)=>{
    let atl:AtletaDto = el[0];
    let cat:category = el[1];
    if(atl.sex==arg1 && categ == cat){
      temp.push(atl);
    } 
  });

  return temp;
}

}


