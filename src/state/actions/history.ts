import * as types from './../types/history';

export default interface Params {
    id: string;
    startTime: number;
    endTime: number;
    jsonData: string;
    success: boolean;
}

export const saveFetchDta = (para: Params) => {
    return {
        payload: para,
        type: types.saveHistory
    }
}
