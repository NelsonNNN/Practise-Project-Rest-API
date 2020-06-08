class EasyHttp {

    async get(url){
        const responce = await fetch(url);
        const resData = await responce.json()
        return resData
    }

    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }
    async post(url, data){
        const response = await fetch(url, {
            method: 'DELETE',
            header:{'Content-type':'application/json'},
        })
        const resData = await 'Deleted Item'
        return resData
    }
}

export const http = new EasyHttp