/* for of */
// for of dapat digunakan di iterable object contohnya
// 1. string
// 2. array
// 3. arguments / NodeList
// 4. typearray
// 5. map 
// 6. set 
// 7. user-defined iterable



// const mhs = ['wahidan', 'khnasa', 'shinta'];
// for(let i = 0; i < mhs.length; i++){
// console.log(mhs[i]);
// };

// mhs.forEach(m => console.log(m));

// for (const m of mhs){
//   console.log(m);
// }

// const nama = 'wahidan';
// for(const n of nama) {
//   console.log(n);
// }

// untuk mengegtahui index menggunakan foreach karfena foreach secara default terdapat index
// const mhs = ['wahidan', 'khnasa', 'shinta'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke- ${i + 1}`)
// });

// kalau for fo gak bisa namun bisa di akali
// const mhs = ['wahidan', 'khnasa', 'shinta'];
// for(const [i, m] of mhs.entries()){
//   console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// }


/*Node List */
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));

// for(n of liNama) {
//   console.log(n.innerHTML);
// }


/*Arguments */
// function jumlahAngka() {
//   return arguments.reduce((a, i) => a + i)
//   arguments.forEach(a => jumlah += a);
//    let jumlah = 0;
//    for(a of arguments) {
//     jumlah += a;
//    }
//    return jumlah
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

/*for .. in*/ 
// adalah bisa melooping hanya untuk enumerable(propery dalam object)
// ngambil property
// const mhs = {
//   nama: 'wahidan nashrullah',
//   kelas: '12 mipa 9',
//   email: 'wahidann765@gamil.com'
// }

// for (m in mhs) {
//   console.log(m);
// }


// ngambil valuentya
const mhs = {
  nama: 'wahidan nashrullah',
  kelas: '12 mipa 9',
  email: 'wahidann765@gamil.com'
}

for (m in mhs) {
  console.log(mhs[m]);
}