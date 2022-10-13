import { GareDto } from './gare.model';

export enum category{
  seniores="SE",
  juniores="JU",
  pulcini="PU",
  giovanissimi="GI"
}
export class AtletaDto{

    public id: number;
    public pettorale: number = -1;
    public name:string;
    public surname: string;
    public nascita: Date;
    public sex: string;
    public team: string;
    public gare: GareDto;

    constructor(obj?:any){
        this.id = obj?.id;
        this.name = obj?.name;
        this.surname = obj?.surname;
        this.nascita = obj?.nascita;
        this.sex = obj?.sex;
        this.team = obj?.team;
        this.pettorale = obj?.pettorale;
        this.gare = new GareDto(obj?.gare);
    }

    public getCategory(){

      switch(new Date().getFullYear()-new Date(this.nascita).getFullYear()){
        case 5:
        case 6:
        case 7:
          return category.pulcini;
          break;
        case 8:
        case 9:
          return category.giovanissimi;
          break;
        case 11:
        case 12:
          return category.juniores;
          break;
        case 13:
        case 14:
        case 15:
        default:
            return category.seniores;
            break;
      }
    }

}
