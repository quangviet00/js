const server = 'http://localhost:4000'
// Lấy dữ liệu về
function apiGet(uri) {
    return fetch(server + uri).then(res => res.json())
}

function apiPost(uri, data) {
    return fetch(server + uri, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}

function apiPut(uri, data) {
    return fetch(server + uri, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}
function apiGetCallback(uri, callback) {
    return fetch(server + uri).then(res => res.json()).then(data => callback(data))
}

function search(keyword) {
    return fetch(server + uri + keyword).then(res => res.json())
}
export {
    apiGet, 
    apiPost, 
    apiPut,
    apiGetCallback,
    search
}