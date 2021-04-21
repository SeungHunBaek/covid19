import { Injectable } from '@nestjs/common';
import axios from "axios";
import c from 'config';
// import config from "config";
// import config from "../../config/config";
import config from "../../config/config";

@Injectable()
export class KoreaDataService {

    getStatus(): string {

        let getPromise = new Promise(async (resolve, reject) => {
            try {
                
                const endPoint: string = config.InfState.endPoint;
                const key: string = config.InfState.key;
                const pageNo: string = config.InfState.pageNo;
                const numOfRows: string = config.InfState.numOfRows;
                const startCreateDt: string = config.InfState.startCreateDt;
                const endCreateDt: string = config.InfState.endCreateDt;

                // const endPoint: string = config.get('InfState.endPoint');
                // const key: string = config.get('InfState.key');
                // const pageNo: string = config.get('InfState.pageNo');
                // const numOfRows: string = config.get('InfState.numOfRows');
                // const startCreateDt: string = config.get('InfState.startCreateDt');
                // const endCreateDt: string = config.get('InfState.endCreateDt');
    
                const results = await axios.get(`${endPoint}${key}${pageNo}${numOfRows}${startCreateDt}${endCreateDt}`);
                resolve(results);
            } catch (error) {
                console.log(error);
                reject(error)
            }
        });
        
        getPromise.then((value) => {

            console.log(value);
            console.log(typeof value);
        }).catch((error) => {
            console.log(error)
        });

        return 'result';
    }
}
