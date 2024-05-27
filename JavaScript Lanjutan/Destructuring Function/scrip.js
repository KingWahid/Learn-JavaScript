/*Destructuring Fucntuion return value */

// function kalkulasi (a, b){
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = kalkulasi (2,3)[0];
// const kali = kalkulasi (2,3)[1];

/*Dengan menggunkan destructuring kita membuat variabel berbentuk array*/
// const [jumlah, kali] = kalkulasi(2,3);
// console.log(kali);

// const [kurang, tambah, kali ,bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);

// problenm ketika kita mendectructuring retrun cvalue yang isinya adalah array adalah urutan dari destructuring nya harus sesuai tidak boleh ketukar


/* kalau mau tidak sesuai dengan urutan */
// function kalkulasi (a,b){
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   }
// }

// const {kurang, bagi, kali, tambah} = kalkulasi(2,3);
// console.log(kurang);


/*Destructuring Fucntuion argument */
const mhs1 = {
  nama: 'wahdian',
  umur: 22,
  email: 'wahidad@gmail.com',
  nilai: {
    tugas: 90,
    uas: 90,
    uts: 95
  }
}

/*tidak menggunakan destruturing */
// function cetakMhs(mhs){
//   return `halo nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

/* menggunakan destruturing */
function cetakMhs({nama, umur, nilai: {tugas, uas, uts}}){
  return `halo nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));