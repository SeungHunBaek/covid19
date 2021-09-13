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

        const items = localState.data.response.body.items;
        let total = [];
        // 합계 데이터만 취득
        items.item.map( (data: any) => {
            if(data.gubunEn === 'Total') {
                total.push(data);
            }
        });
        return total;
    }

    async vaccineStatus(): Promise<object> {    
        // 한국내 백신접종 현황
        const endPoint: string = config.VaccineState.endPoint;
        const key: string = config.VaccineState.key;
        const pageNo: string = config.VaccineState.pageNo;
        const numOfRows: string = config.VaccineState.perPage;
        const startCreateDt: string = this.getStartCreateDt();
        const endCreateDt: string = this.getEndCreateDt();

        const vaccineStatus = await axios.get(`${endPoint}${key}${pageNo}${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`);
        this.getStartCreateDt();
        this.getEndCreateDt();

        const items = vaccineStatus.data.response.body.items;
 
        return items;
    }

    // 검색시작 일자
    getStartCreateDt() {
        const date = new Date();
        // 9시 이전 데이터는 미갱신 상태이므로 전날짜의 데이터를 취득한다
        const updateDate = date.getHours() > 9 ? this.calculateDate(date, -6) : this.calculateDate(date, -7);
        let startDate: string = `${date.getFullYear()}${this.subZero(date.getMonth()+1)}${this.subZero(updateDate)}`;

        return startDate;
    }
    // 검색종료 일자
    getEndCreateDt() {
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
