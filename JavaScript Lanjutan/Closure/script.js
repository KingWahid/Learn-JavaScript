// Closure
// function init () {
    // let nama = 'khansa';
//     function tampilNama (nama) {
//         console.log(nama)
//     }
//     return tampilNama;
// }
// let panggilNama = init()
// panggilNama('khansa')


// anonimous function
// function init () {
//     // let nama = 'khansa';
//     return function (nama) {
//         console.log(nama);
//     }
 
// }
// let panggilNama = init()
// panggilNama('khansa');
// panggilNama('wahidan');

// factories function
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi')
// let selamatMalam = ucapkanSalam('Malam')
// let selamatSiang = ucapkanSalam('Siang')

// console.dir(selamatMalam);


// private method atau private variable
// tidak efektif
// let counter = 0
// let add = function(){
//    return ++counter
// }
// counter = 100
// console.log(add())




// agak aneh kita bikin variable buat nampung
// let add = function () {
//     let counter = 0;
//     return function () {
//        return ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// menggunakan immedietly invoked function (IIFE)
let add = (function () {
    let counter = 0;
    return function () {
       return ++counter;
    }
}) ();


console.log(add());
console.log(add());
console.log(add());
console.log(add());