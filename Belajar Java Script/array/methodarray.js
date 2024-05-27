// method array

// 1. join
// var arr = ['wahidan','khansa','inay']
// console.log(arr.join());

// var arr = ['wahidan','khansa','inay']
// console.log(arr.join(' _ '));

// 2. push
// var arr = ['wahidan','khansa','inay']
// arr.push('dio','nopal')
// console.log(arr.join(' _ '));

// // 3. pop
// var arr = ['wahidan','khansa','inay']
// arr.pop()
// arr.pop()
// console.log(arr.join(' _ '));

// 4. unshift
// var arr = ['wahidan','khansa','inay']
// arr.unshift('aca')
// console.log(arr.join(' _ '));

// 5. shift
// var arr = ['wahidan','khansa','inay']
// arr.shift()
// console.log(arr.join(' _ '));

// 6. splice
// rumus splice (indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ....)
// var arr = ['wahidan','khansa','inay']
// arr.splice(2, 0, 'doddy', 'ican')
// console.log(arr.join(' _ '));

// contoh slice dihapus
// var arr = ['wahidan','khansa','inay']
// arr.splice(1, 2, 'doddy', 'ican')
// console.log(arr.join(' _ '));

// 7.slice
// rumus slice (indexAwal, indexAkhir) menghasilkan array baru
// var arr = ['wahidan','khansa','inay','ican','vadil']
// var arr2 = arr.slice(1,3)
// console.log(arr2.join(' _ '));

// 8. forEach
// var angka = [1,2,3,4,5,6,7,8]
// var nama = ["Wahidan", "khansa", "alya"]
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i])
// }
// angka.forEach(function(e) {
//  console.log(e)
// })

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke- ' + (i+1) + ' adalah : ' + e);
// })

// 9. map (mengembalikan nilai array)
// var angka = [1,2,9,4,4,8,7,8]
// var angka2 = angka.map(function(e){
//     return e * 2
// })
// console.log(angka2.join(' - '))

// 10. sort (mengurutkan)
// var angka = [1,2,9,20,4,4,8,7,8]
// angka.sort(function(a,b){
//     return a-b
// })
// console.log(angka.join('-'))

// 11. filter (mencari nilai array dan mengaembalikannya dalam bentuk array)
// var angka = [1,2,9,20,4,4,8,7,8]
// var angka2 = angka.filter(function(j) {
//     return j > 4
// })
// console.log(angka2.join(' _ '))

// 12. find
// var angka = [1,2,9,20,4,4,8,7,8]
// var angka2 = angka.find(function(j) {
//     return j > 4
// })
// console.log(angka2)