//Previous iteration of APISync class
import axios, { AxiosPromise } from 'axios';
import { HasId } from '../interfaces';

export class Sync<T extends HasId> {
    constructor(public api: string) {}

    fetch(id: number): AxiosPromise {
       return axios.get(`${this.api}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;
        if(id) {
            console.log('puts');
            return axios.put(`${this.api}/${id}`, data);
        } else {            
            console.log('posts');            
            return axios.post(this.api, data);
        }
    }
}