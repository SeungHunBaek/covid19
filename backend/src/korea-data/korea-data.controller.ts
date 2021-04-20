import { Controller, Get } from '@nestjs/common';
import { KoreaDataService } from './korea-data.service';

@Controller('korea-data')
export class KoreaDataController {

    constructor(private readonly koreaDataService: KoreaDataService) {}
    
    @Get()
    getStatus(): string {

        return this.koreaDataService.getStatus();
    }
}
