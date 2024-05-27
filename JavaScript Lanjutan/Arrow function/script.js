// Fucntion expression
// const tampilNama = function(nama){
//     return `Halo ${nama} `;
// }
// console.log(tampilNama('wahidan'))

// Arrow function
// const tampilNama = (nama) => {
//     return `halo ${nama}`;
// }
// console.log(tampilNama('Khansa Afiyah'))



// const tampilNama = (nama, waktu) => {
//     return `halo selamat ${waktu}, senang bertemu denganmu ${nama}`;
// }
// console.log(tampilNama('Khansa Afiyah', 'Malam'))



// IMPLISIT RETURN => kalau parameternya satu ga perlu pake kurung kalau 2 harus pake kalau isi dari funtionnya hanya return aja kalian bahkan tidak perlu tulis nilai returnnya dan lebih ringkasnya lagi kalian bahkan gak perlu kurung
// const tampilNama = nama => 
//     `halo ${nama}`;
// console.log(tampilNama('Khansa Afiyah'))



// KALAU TANPA PARAMETER => wajib menuliskan kurung
// const tampilNama = () => `helo world`;
// console.log(tampilNama());

// pemetaan array
// let mahasiswa = ['wahidan', 'khansa', 'keisha'];

// const jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// menggunakan arrow function
// const jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);

// pemetaan mau mengembalikan dalam bentuk objek menggunakan kurung dan kurung kurawal di depan arrow
// let jumlahHuruf = mahasiswa.map(nama => ({nama:nama, jumlahHuruf:nama.length}))
// console.table(jumlahHuruf);





// konsep this pada arrow funtion
// // constructor funtion
// let Mahasiswa = function () {
//     this.nama = 'wahidan';
//     this.umur = 20;
//     this.sayHello = function(){
//         console.log (`halo ${this.nama}, umurku ${this.umur} tahun`);
//     }

// }

// const wahidan = new Mahasiswa();



// let Mahasiswa = function () {
//     this.nama = 'wahidan';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log (`halo ${this.nama}, umurku ${this.umur} tahun`);
//     }

// }

// const wahidan = new Mahasiswa();



// objek literal => karena tidak memiliki this maka arrow function mencari ke leksikal scope ada this ngak, oh gak ada maka dia akan cari ke atasnya lagi sampai ke window jika masih tidak ada maka tampiolkan undefined
// const mhs1 = {
//     nama: 'wahidan',
//     umur: 20,
//     sayHello: () => {
//         console.log (`halo ${this.nama}, umurku ${this.umur} tahun`);
//     }
// }

// contoh lain
// let Mahasiswa = function () {
//     this.nama = 'wahidan';
//     this.umur = 20;
//     this.sayHello = function(){
//         console.log (`halo ${this.nama}, umurku ${this.umur} tahun`);
//     }

// setInterval(() => {
//     console.log(this.umur++);
// }, 500);

// }

// const wahidan = new Mahasiswa();




const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size'
    let dua = 'caption'

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }


    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600);
});












