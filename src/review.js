let data = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'banana'},
    {id: 3, name: 'cherry'},
]

const res = data.filter((value) => value['id'] > 1)

console.log(res)

let obj = {id: 3, name: 'cherry'}


console.log(obj['name'])