import { Controller, Get } from '@nestjs/common';
import { KoreaDataService } from './korea-data.service';

@Controller('korea-data')
export class KoreaDataController {

    constructor(private readonly koreaDataService: KoreaDataService) {}
    
    @Get()
    async getStatus(): Promise<object> {

        const infState: object = await this.koreaDataService.getStatus();

        console.log(`[KoreaDataController]: infState: ${JSON.stringify(infState, null, 4)}`);
        return infState;
    }
    @Get('/localStatus')
    async localStatus(): Promise<object> {

        const localStatus: object = await this.koreaDataService.localStatus();

        return localStatus;
    }
}
