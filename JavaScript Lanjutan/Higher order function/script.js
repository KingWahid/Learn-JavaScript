const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = []
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3){
//         newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);




// Filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka)

// map
// kalikan angka dengan 2
// const newAngka = angka.map(a => a * 2)
// console.log(newAngka)
// console.log(angka)

// reduce
// jumlahkan seluruh elemetn pada array
// const newAngka = angka.reduce((accumolator, currentValue) => 
// accumolator + currentValue,);
// console.log(newAngka)


// Method chaining --> kita bisa menggabukan fungsi fungsi higher order function dengan seklai eksekusi ngak perlu di simpen kedalam variable dulu
const hasil = angka.filter(a => a > 5)
.map(a => a * 3)
.map(a => a / 3)
.reduce((accumolator, currentValue) => 
accumolator + currentValue);
console.log(hasil)