import { Module } from '@nestjs/common';
import { KoreaDataController } from './korea-data.controller';
import { KoreaDataService } from './korea-data.service';

@Module({
    controllers: [KoreaDataController],
    providers: [KoreaDataService]
})
export class KoreaDataModule {}
