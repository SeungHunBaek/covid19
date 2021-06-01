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
        const startCreateDt: string = this.getStartCreateDt();
        const endCreateDt: string = this.getEndCreateDt();
        
        const infState = await axios.get(`${endPoint}${key}${pageNo}${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`);
        return infState.data.response.body;
    }

    async localStatus(): Promise<object> {    
        // 한국내 지역별 확진자, 완치자, 치료중인환자, 사망자
        const endPoint: string = config.LocalState.endPoint;
        const key: string = config.LocalState.key;
        const pageNo: string = config.LocalState.pageNo;
        const numOfRows: string = config.LocalState.numOfRows;
        const startCreateDt: string = this.getStartCreateDt();
        const endCreateDt: string = this.getEndCreateDt();

        const localState = await axios.get(`${endPoint}${key}${pageNo}${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`);
        this.getStartCreateDt();
        this.getEndCreateDt();

        const item = localState.data.response.body.items;
        item.map( (data: object) => {
            console.log(data)
        });
        console.log(`[KoreaDataController]: item: ${JSON.stringify(item, null, 4)}`);
        return localState.data.response.body.items;
    }

    getStartCreateDt() {
        const date = new Date();
        const updateDate = date.getHours() > 9 ? this.calculateDate(date, -6) : this.calculateDate(date, -7);
        let startDate: string = `${date.getFullYear()}${this.subZero(date.getMonth()+1)}${this.subZero(updateDate)}`;
        return startDate;
    }
    getEndCreateDt() {
        const date = new Date();
        const updateDate = date.getHours() > 9 ? this.calculateDate(date, 0): this.calculateDate(date, -1);
        let endDate: string = `${date.getFullYear()}${this.subZero(date.getMonth()+1)}${this.subZero(updateDate)}`;

       return endDate;
    }
    calculateDate(date: Date, value: number) {
        date.setDate(date.getDate()+value);
        return date.getDate();
    }
    subZero(int: number) {
        const str = ('0'+int).slice(-2);
        return str;
    }
}
