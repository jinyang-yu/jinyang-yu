const TOKEN = "0i3cPTjpaeIurL+NtcQD0g==MJgrVd4VzPPFmGoK"
const APIURL = "https://api.api-ninjas.com/v1/exercises?muscle=biceps"

const OPTION = {
    method: 'GET',
    headers: {'x-api-key' : TOKEN}
}

fetch(APIURL, OPTION) // returns promise
.then(response => {
    if(!response.ok) {
        throw new Error('Network not working')
    }
    return response.json()
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error('Error', error)
})

const APIURL2 = "https://reqres.in/api/users"
const OPTION2 = {
    method: 'POST',
    body: JSON.stringify({
        "name" : "John",
        "job" : "farmer"
    })
}

fetch(APIURL2, OPTION2) // returns promise
.then(response => {
    if(!response.ok) {
        throw new Error('Network not working')
    }
    return response.json()
})
.then(update => {
    console.log(update)
})
.catch(error => {
    console.error('Error', error)
})