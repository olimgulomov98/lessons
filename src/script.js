
// class Navbar {
//     getName() {

//     }
// }
// class Navbar2 extends Navbar {

// }

// const obj = {
//     name: 'react',
//     status: 'react js'
// }
// console.log(obj.name)

// const {name: n} = obj
// console.log(n);

function navbar (name, name2) {
    console.log(`Hello ${name} ${name2 || 'none'}`);
}
navbar('React', 'html')
navbar('Html')
navbar('Css')