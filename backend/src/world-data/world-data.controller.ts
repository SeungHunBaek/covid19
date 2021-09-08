import { Controller, Get } from '@nestjs/common';
import { WorldDataService } from './world-data.service';

@Controller('world-data')
export class WorldDataController {

    constructor(private readonly worldDataService: WorldDataService) {}
    
    @Get('/localStatus')
    async localStatus(): Promise<object> {

        const localStatus: object = await this.worldDataService.worldStatus();

        return localStatus;
    }
}
