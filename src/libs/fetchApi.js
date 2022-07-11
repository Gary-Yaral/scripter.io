async function fetchApi(url, attributes=null) {
    let data = null
    if(attributes !== null) {
        data = await fetch(url)
        return data.json
    }

    data = await fetch(url, attributes)
    return await data.json()
}

export {fetchApi}