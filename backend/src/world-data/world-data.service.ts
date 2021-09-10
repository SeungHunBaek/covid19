import { Injectable } from '@nestjs/common';
import axios from "axios";
import config from "../../config/config";

@Injectable()
export class WorldDataService {

    async worldStatus(): Promise<object> {            
        // 세계 지역별 확진자, 완치자, 치료중인환자, 사망자
        const endPoint: string = config.WorldState.endPoint;
        const key: string = config.WorldState.key;
        const pageNo: string = config.WorldState.pageNo;
        const numOfRows: string = config.WorldState.numOfRows;
        const startCreateDt: string = this.getTodayCreateDt();
        const endCreateDt: string = this.getTodayCreateDt();
        
        console.log(`${endPoint}${key}${pageNo}${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`)
        const localState = await axios.get(`${endPoint}${key}${pageNo}${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`);

        const items = localState.data.response.body.items;

        return items;
    }

    // 검색용 오늘일자
    getTodayCreateDt() {
        const date = new Date();
        // 9시 이전 데이터는 미갱신 상태이므로 전날짜의 데이터를 취득한다
        const updateDate = date.getHours() > 9 ? this.calculateDate(date, 0): this.calculateDate(date, -1);
        let endDate: string = `${date.getFullYear()}${this.subZero(date.getMonth()+1)}${this.subZero(updateDate)}`;

       return endDate;
    }
    // 날짜 계산처리
    calculateDate(date: Date, value: number) {
        date.setDate(date.getDate()+value);
        return date.getDate();
    }
    // 날짜 포멧변환 처리
    subZero(int: number) {
        const str = ('0'+int).slice(-2);
        return str;
    }
}
