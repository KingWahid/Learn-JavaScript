// this
// var a = 10;
// console.log(this.a)
// // window === this
// console.log(window.a)


// Cara 1 - function declarations
// this pada function declaration konteksnya adalah mengembalikan object global
// function halo() {
//     console.log(this)
//     console.log('hai')
// }
// this.halo();


// Cara 2 - object literal
// this mengembalikan object yang bersangkutan
// var obj = {a : 10, nama : 'wahidaan'};
// obj.halo = function() {
//     console.log(this)
//     console.log('halo')
// }
// obj.halo();

// Cara 3 - Consturctur
// this mengembalikan object yang baru di buat
// function Halo() {
//     console.log(this);
//     console.log('yooo')
// }
// var obj1 = new Halo();
// var obj2 = new Halo();