import { Injectable } from '@nestjs/common';

@Injectable()
export class KoreaDataService {

    getStatus(): string{

        return 'temp';
    }
}
