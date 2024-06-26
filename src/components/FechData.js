import AsyncMock from "./AsyncMock";

export const FetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () =>{
            resolve(AsyncMock);
        },500) 
    })
}

export const GetItemById = (id) =>{
    return new Promise((resolve,reject) =>{

        const item = AsyncMock.find((item) => item.id === id);

        if (item){
            resolve(item)
        }else{
                reject({
                    error: "No tenemos este producto"
            })  
        }
    })
}