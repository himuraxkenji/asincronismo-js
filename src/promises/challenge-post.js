import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}


const data = {
    title: "New product course",
    price: 9999,
    description: "a description",
    categoryId: 1,
    images: [
        "https://placeimg.com/640/480/any"
    ]
}

postData(`${API}/products`, data)
    .then(response =>response.json())
    .then(console.log)
    .catch(console.error)