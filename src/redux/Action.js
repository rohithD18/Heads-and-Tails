export const getData=(item)=>{
    return {
        type: "STORE_DATA",
        payload: item,
    }
}
export const getIdx=(idx)=>{
    return {
        type: "STORE_IDX",
        payload: idx,
    }
}
export const getIdy=(idy)=>{
    return {
        type: "STORE_IDY",
        payload:  idy,
    }
}
