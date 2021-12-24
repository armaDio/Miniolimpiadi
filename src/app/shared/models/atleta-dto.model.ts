export class AtletaDto{

    public id: number;
    public name:string;
    public surname: string;
    public nascita: Date;
    public sex: string;
    public team: string;
    
    constructor(obj?:any){
        this.id = obj?.id;
        this.name = obj?.name;
        this.surname = obj?.surname;
        this.nascita = obj?.nascita;
        this.sex = obj?.sex;
        this.team = obj?.team;
    }

    
}