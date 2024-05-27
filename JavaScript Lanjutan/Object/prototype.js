// Membuat obejct
// 1. Obejct literal --> problemnya tidak efectif untuk object yang banyak karena meniyampan di dua memory
// var mhs = {
//     nama : 'Wahidan',
//     jurusan : 'IPA',
//     email : 'wahidann765@gmail.com',
//     energi : '10',

    
// }

// // 2.Menggunakan function declaration --> sama menyimpan jadi 2 memory namun bisa di akali tapi ribet harus menghapus dan menambahkan object dan method
// // 3. Menggunakan Object.create();
// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log('halo ' + mhs.nama + 'makan')
//     },

//     tidur : function(jam){
//         this.energi += jam * 2
//         console.log('halo ' + mhs.nama + 'selamat tidur')
//     }
// }


// function buatObjectMahasiswa(nama, jurusan, email, energi) {
//     let mhs = Object.create(methodMahasiswa);
//     mhs.nama = nama;
//     mhs.jurusan = jurusan;
//     mhs.email = email;
//     mhs.energi = energi;

//     return mhs
// } 

// var mhs3 = buatObjectMahasiswa('idan', 'ipa', 'wahidann765@gmail.com', 10)
// var mhs4 = buatObjectMahasiswa('aca', 'kedokteran', 'aca@gmail.com', 20)

// //4. Constructor
// function Mahasiswa(nama, jurusan, email) {
//     // var this = {};
//     this.nama = nama;
//     this.jurusan = jurusan;
//     this.email = email;
//     // return this
// }
// var mhs5 = new Mahasiswa('inay', 'agroteknologi', 'inay@gmail.com');



// Prototype
// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa); --> kalau mau pake constructor ini kan di hilangkan
//     // let this = Object.create(Mahasiswa.prototype); --> dibalik layar JS otomatis membuat this yang bentuknya objek dan ada properti deafult yang di jadikan default oleh js yaitu prototype
//     this.nama = nama;
//     this.energi = energi;
//     // return this --> membuat juga return this
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat main`
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur`
// }
// let wahidan = new Mahasiswa ('Wahidan', 10);



// versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }


// makan(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`
// }

// main(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat main`
// }

// tidur(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur`
// }
// }

// let wahidan = new Mahasiswa('wahidan', 10);
// let khansa = new Mahasiswa('khansa', 20)


// let angka = [];
// let angka = new Array(); --> sebernya ini yang terjadi di belakang layar

