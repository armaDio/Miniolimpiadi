export class GareDto{

  public freccette: object;
  public alto: object;
  public arco: object;
  public lungo: object;
  public peso: object;
  public vortex: object;
  public velocita: object;
  public mezzofondo: object;

  constructor(obj?:any){

      this.alto = !!obj?.alto? obj?.alto : undefined;
      this.arco = !!obj?.arco? obj?.arco : undefined;
      this.lungo = !!obj?.lungo? obj?.lungo : undefined;
      this.freccette = !!obj?.freccette? obj?.freccette : undefined;
      this.peso = !!obj?.peso? obj?.peso : undefined;
      this.vortex = !!obj?.vortex? obj?.vortex : undefined;
      this.velocita = !!obj?.velocita? obj?.velocita : undefined;
      this.mezzofondo = !!obj?.mezzofondo? obj?.mezzofondo : undefined;
  }


}
