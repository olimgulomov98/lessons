// Local Storage
const password = '12345'

const person = {id: 1, name: 'John', status: 'student'}
const personJson = JSON.stringify(person)

console.log(JSON.parse(personJson))

// localStorage.setItem('password', password)
// localStorage.getItem('password')
// localStorage.removeItem('password')
// localStorage.clear()
// JSON.stringify({id: 1, name: 'John', status: 'student'}))
// JSON.parse(({id: 1, name: 'John', status: 'student'})