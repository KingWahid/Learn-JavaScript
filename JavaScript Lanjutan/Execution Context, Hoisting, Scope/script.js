// Execution Context, Hoisting dan scope


// var nama = 'wahidan'
// console.log(nama);

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting --> diartikan sebagai menyert bendera ke atas
// window = global context
// this = window



// Execution phase

// console.log(sayHello());

// var nama = 'Wahidan';
// var umur = 20;



// function sayHello(){
//     return (`hello nama saya ${nama}, umur saya ${umur}`);
// }

// function membuat local execution contxt
// yang di dalam nya terdapat creation dan execution phase
// akses window
// akses arguments
// hoisting


// latihan
function satu () {
    var nama = 'wahidan';
    console.log(nama);
}


function dua () {
    console.log(nama);
}

console.log(nama);
var nama = 'khansa'
satu();
dua('doddy');
console.log(nama)