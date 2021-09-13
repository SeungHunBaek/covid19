import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoreaDataService } from './korea-data/korea-data.service';
import { KoreaDataController } from './korea-data/korea-data.controller';
import { KoreaDataModule } from './korea-data/korea-data.module';
import { WorldDataService } from './world-data/world-data.service';
import { WorldDataController } from './world-data/world-data.controller';
import { WorldDataModule } from './world-data/world-data.module';

@Module({
  imports: [KoreaDataModule, WorldDataModule],
  controllers: [AppController, KoreaDataController, WorldDataController],
  providers: [AppService, KoreaDataService, WorldDataService],
})
export class AppModule {}
