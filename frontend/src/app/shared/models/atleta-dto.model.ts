import { GareDto } from './gare.model';
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


}
