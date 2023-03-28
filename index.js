const user = {
    name: 'joe',
    age: 30
}

function printInfo({age}){
    return '<h1>Hola ' + age + '</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)