/*Rest parameter */
// Memprentasikan argument pada functions dengan jumlah yang tidak terbatas menjadi sebuah array

// function jumlahAngka(...myAngka){
// let total = 0;
// for(const a of myAngka){
//   total += a;
// }
// return total;
// return myAngka.reduce((a, b) => a + b);
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['wahidan', 'khansa', 'dhaafina', 'fadil', 'inay', 'keihsa', 'devina'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//   pm: 'wahidan',
//   fronend1: 'khansa',
//   frontend2: 'kreshna',
//   backend: 'rozan'
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam)

// filetering
function filterBy(type, ...values){
return values.filter(v => typeof v ===type);
}
console.log(filterBy('string', 1, 2, 'wahdian', 'khansa', true, false));