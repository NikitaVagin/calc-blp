export const getAllMaterials = (state:any) => state.data.allData.materials.byId

export const getMaterialById = (arr:any, id:any) => {
    if(!arr || !id) {
        return null
    }
    return arr[id]
}