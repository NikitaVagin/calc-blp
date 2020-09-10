import mockFasteningData from './mock-data/fastening-cover.json'
import {v4 as uuidv4 } from 'uuid';
import { resolve } from 'dns';
import { rejects } from 'assert';

// interface URL {
//     createObjectURLL:any
// }
// declare let url: URL

export default class MoySkladService {
    login = 'admin@falkentt3'
    password = '9e3cb83ca2'
    logPasB64 = btoa(`${this.login}:${this.password}`);
    _apiBase = 'https://online.moysklad.ru/api/remap/1.2/';
    _proxy = 'http://192.168.1.10:5000/'
    _headers = {
        'Authorization': `Bearer 7d1d4b6d841acc1d8b6589e44a54008e3d16ca75`,
        'Cache-Control': 'no-cache',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
    }

    async getImage (metaImg:string) {
    const regExp = /moysklad/;
       const res = await  fetch(this._proxy, {
             method: 'GET',
             headers: Object.assign({'Target-Endpoint': metaImg},this._headers)
         })
        if(!regExp.test(metaImg)){
            const blob =  await res.blob();
            console.log(blob)
            return this._createObjectUrl(blob);
        }
        const obj = await res.json()
        const fetchImage = await fetch(this._proxy, {
            method: 'GET',
            headers: Object.assign({'Target-Endpoint': obj.rows[0].meta.downloadHref}, this._headers)
        })
         const blob = await fetchImage.blob();
        return this._createObjectUrl(blob);
         
    }
    _createObjectUrl(blob:Blob){
        return URL.createObjectURL(blob)
    }

    _toBase64 = (blob:any) => {
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
        const res = await fetch(`${this._proxy}`, {
            headers: Object.assign({'Target-Endpoint': `${this._apiBase}${url}`}, this._headers)
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
                image: material.images.meta.href,
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
