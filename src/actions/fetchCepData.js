import axios from 'axios';

export const FETCH_CEP_DATA = 'FETCH_CEP_DATA';

export function FetchCepData(cep){
    const request = axios.get(`https://viacep.com.br/ws/${cep}/json`);
    console.log(request);

    return {
        type: FETCH_CEP_DATA,
        payload: request
    }
}