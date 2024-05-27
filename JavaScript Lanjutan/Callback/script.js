
/*Callback*/
// Syncrhonos callback
// function halo (nama) {
//   alert(`Halo, ${nama}`);

// }

// function tampilkanPesan (callback) {
//   const nama = prompt(`masukan nama: `);
//   callback(nama);
// }

// tampilkanPesan(halo);

// menggunaakan anomimous function
// tampilkanPesan (nama => alert(`halo, ${nama}`));

// const mhs = [
//     {
//     nama: 'wahidan',
//     kelas: 'xii mipa 9',
//     email: 'wahidann765@gmail.com'
//   },
//     {
//     nama: 'khansa',
//     kelas: 'xii mipa 10',
//     email: 'kahnsa@gmail.com'
//   },
//     {
//     nama: 'inay',
//     kelas: 'xii mipa 5',
//     email: 'imay@gmail.com'
//   }
// ];

// console.log('mulai');
// mhs.forEach(m => console.log(m.kelas));
// console.log('selelsai')



// Asynchronos callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {

//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// getDataMahasiswa('callback/mahasiswa.json', success, error);
// kita panggil dengan cara di atas cuma kita harus mempunyai function succes dan function error

// cara lain
// console.log('mulai')
// getDataMahasiswa('mahasiswa.json', (results) => {
  // console.log(JSON.parse(results));
//   const mhs = JSON.parse(results);
//   mhs.forEach(m => console.log(m.email));
// }, () => {

// });
// console.log('selesai')



// jquery
console.log('mulai');
$.ajax({
  url: 'mahasiswa.json',
  success: (mhs) => {
    dsn.forEach(mhs => console.log(mhs));
  },
  error: (e) => {
    console.log(e,responseText);
  }
}); 
console.log('selesai');