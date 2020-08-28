import mockFasteningData from './mock-data/fastening-cover.json'
import {v4 as uuidv4 } from 'uuid';
import { URL } from 'url';
import { resolve } from 'dns';
import { rejects } from 'assert';

export default class MoySkladService {
    login = 'admin@falkentt3'
    password = '9e3cb83ca2'
    logPasB64 = btoa(`${this.login}:${this.password}`);
    _apiBase = 'https://online.moysklad.ru/api/remap/1.1/';
    _proxy = 'https://thingproxy.freeboard.io/fetch/'
    _proxy1 = 'http://192.168.1.10:5000/'

    async getImage (metaImg:string) {
       const res = await  fetch(`http://192.168.1.10:5000/`, {
             method: 'GET',
             headers: {
                'Target-Endpoint': metaImg,
             }
         })

        const blobImage = await res.blob();

        return await this._getBase64(blobImage);
        
         
    }
    _getBase64 = (blob:any) => {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                let base64 = reader.result;
                  resolve(base64);
            }

        })
    }
    async getResourseApi (url: string) {
        const res = await fetch(`${this._proxy1}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 7d1d4b6d841acc1d8b6589e44a54008e3d16ca75`,
                'Accept': '*/*',
                'Cache-Control': 'no-cache', 
                'Target-Endpoint': 'https://online.moysklad.ru/api/remap/1.2/entity/product?filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/841d9497-d59a-11ea-0a80-09e90035f3d0=true',
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
