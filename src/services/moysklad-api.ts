import mockFasteningData from './mock-data/fastening-cover.json'


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
        console.log(mockFasteningData);
        const normalize = (a:any) => ({
            byId : Object.fromEntries(a.map((v:any) => [v.id, v])),
            allId: a.map((v:any) => v.id)
          })
          const normMaterials = normalize(materials);
          return normMaterials;
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
}