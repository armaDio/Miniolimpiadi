import { Controller, Get } from '@nestjs/common';
import { AtletaService } from './atleta.service';

@Controller('atleti')
export class AtletaController {
  constructor(private readonly atletaService: AtletaService) {
    atletaService.findAll().then((result) => console.error(result));
  }

  @Get()
  getHello(): Promise<string> {
    return this.atletaService
      .findAll()
      .then((val) => {
        return val
          .map((value) => {
            console.warn(value);
            console.error(value.specialita);
            return JSON.stringify(value);
          })
          .join(', ');
      })
      .catch(() => '');
  }
}
