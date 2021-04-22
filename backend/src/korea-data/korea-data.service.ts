import { Injectable } from '@nestjs/common';
import axios from "axios";
import config from "../../config/config";

@Injectable()
export class KoreaDataService {

    async getStatus(): Promise<object> {
        
        // 확진자, 완치자, 치료중인환자, 사망자등에 대한 현황정보
        const endPoint: string = config.InfState.endPoint;
        const key: string = config.InfState.key;
        const pageNo: string = config.InfState.pageNo;
        const numOfRows: string = config.InfState.numOfRows;
        const startCreateDt: string = config.InfState.startCreateDt;
        const endCreateDt: string = config.InfState.endCreateDt;
        
        const infState = await axios.get(`${endPoint}${key}${pageNo}${numOfRows}${startCreateDt}${endCreateDt}`);
        return infState.data.response.body;
    }
}
