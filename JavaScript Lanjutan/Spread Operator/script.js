/*Spread Operator*/
// Memeacah (expand/unpack) iterable menjadi single element
// const mhs = ['wahidan' ,'kreshna', 'krisna'];
// console.log(...mhs[0]);

// digunakan untuk mengabungkan dua array
// const mhs = ['wahidan' ,'kreshna', 'krisna'];
// const dosen = ['dika', 'aldo', 'jerry'];
// const orang = [...mhs,'khansa', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);


// mencopy array
// const mhs = ['wahidan' ,'kreshna', 'krisna'];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar'
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(a => a.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf