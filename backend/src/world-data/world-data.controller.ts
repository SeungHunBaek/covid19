import { Controller, Get } from '@nestjs/common';
import { WorldDataService } from './world-data.service';

@Controller('world-data')
export class WorldDataController {

    constructor(private readonly worldDataService: WorldDataService) {}
    
    @Get()
    async getStatus(): Promise<object> {

        const infState: object = await this.worldDataService.getStatus();

        console.log(`[KoreaDataController]: infState: ${JSON.stringify(infState, null, 4)}`);
        return infState;
    }
    @Get('/localStatus')
    async localStatus(): Promise<object> {

        const localStatus: object = await this.worldDataService.localStatus();

        return localStatus;
    }
    @Get('/vaccineStatus')
    async vaccineStatus(): Promise<object> {

        const vaccineStatus: object = await this.worldDataService.vaccineStatus();

        return vaccineStatus;
    }
}
