import { Module } from '@nestjs/common';
import { WorldDataController } from './world-data.controller';
import { WorldDataService } from './world-data.service';

@Module({
    controllers: [WorldDataController],
    providers: [WorldDataService]
})
export class WorldDataModule {}
