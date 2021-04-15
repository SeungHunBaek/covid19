import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoreaDataService } from './korea-data/korea-data.service';
import { KoreaDataController } from './korea-data/korea-data.controller';
import { KoreaDataModule } from './korea-data/korea-data.module';

@Module({
  imports: [KoreaDataModule],
  controllers: [AppController, KoreaDataController],
  providers: [AppService, KoreaDataService],
})
export class AppModule {}
