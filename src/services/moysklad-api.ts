import mockFasteningData from './mock-data/fastening-cover.json'
import {v4 as uuidv4 } from 'uuid';

export default class MoySkladService {
    login = 'admin@falkentt3'
    password = '9e3cb83ca2'
    logPasB64 = btoa(`${this.login}:${this.password}`);
    _apiBase = 'https://online.moysklad.ru/api/remap/1.1/';
    _proxy = 'https://thingproxy.freeboard.io/fetch/'

    async getResourseApi (url: string) {
        const res = await fetch(`${this._proxy}${this._apiBase}${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${this.logPasB64}`,
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive'
               }
        });
        if(!res.ok){
            console.error(`Не могу получить информацию из ${url}, возвращает ${res.status}`)
        }
        return await res.json();
    }

    getMaterial = async () =>{
        const res = await this.getResourseApi('entity/product?filter=https://online.moysklad.ru/api/remap/1.1/entity/product/metadata/attributes/841d9497-d59a-11ea-0a80-09e90035f3d0=true');
        const materials = res.rows.map(this._transformMaterial);
        const normMaterials = {materials: this._normolizeData(materials)} ;
        return Object.assign({}, this._transformData(mockFasteningData), normMaterials)
    }

    _transformMaterial = (material:any) => {
            return {
                id: material.id,
                name: material.name,
                image: material.image.meta.href,
                price: material.salePrices[0].value / 100,
                description: material.description
            }
    }

    _normolizeData = (arr:any) => ({
        byId : Object.fromEntries(arr.map((v:any) => [v.id, v])),
        allId: arr.map((v:any) => v.id)
    })

    _transformData = (obj:any) => {
        let objWithId:any = {};
        for(let key in obj){
            objWithId[key] = this._normolizeData(obj[key].map((e:any) => {
                const id = {id: uuidv4()}
                return Object.assign(id, {...e})
            }))
        }
        return objWithId;
    }
}