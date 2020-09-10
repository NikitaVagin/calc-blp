export const getAllMaterials = (state:any) => state.data.allData.materials.byId

export const getAllfasteningCover = (state:any) => state.data.allData.fasteningCover.byId

export const getAllOptionsForBoat = (state:any) => state.data.allData.optionsForBoat.byId

export const getMaterialById = (arr:any, id:any) => {
    if(!arr || !id) {
        return null
    }
    return arr[id]
}