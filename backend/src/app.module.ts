import { atletaspecialita } from './entities/risultati.entity';
import { Specialita } from './entities/specialita.entity';
import { Atleta } from './entities/atleta.entity';
import { AtletaModule } from './atleta/atleta.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialitaModule } from './specialita/specialita.module';
import { Bonus } from './entities/bonus.entity';

@Module({
  imports: [
    AtletaModule,
    SpecialitaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'miniolimpiadi',
      schema: 'public',
      entities: [Atleta, Specialita, atletaspecialita, Bonus],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
