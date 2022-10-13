import { Controller, Get } from '@nestjs/common';
import { SpecialitaService } from './specialita.service';

@Controller('users')
export class SpecialitaController {
  constructor(private readonly atletaService: SpecialitaService) {
    atletaService.findAll().then((result) => console.error(result));
  }

  @Get()
  getHello(): Promise<string> {
    return this.atletaService
      .findAll()
      .then((val) => {
        return val.map((value) => JSON.stringify(value)).join(', ');
      })
      .catch(() => '');
  }
}
