// Destructuring assingment
// Adalah Expresion pada javascript yang membuat kita dapat membokar (unpacking) nilai pada array atau properti dari project kedalam variable yang terpisah

// Destructuring Array
// const perkenalan = ['halo', 'nama', 'saya', 'wahidan'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping item
// const [salam, , , nama] = perkenalan
// console.log(satu)


// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// Return value pada function
// function coba(){
//     return [1,2];
// }
//  const [a,b] = coba();
//  console.log(a)


// Rest Parameter
// const [a, ...values] = [1,2,3,4,54]
// console.log(values)


// Destructuring Object
// const mhs = {
//     nama: 'Wahidan Nashrullah',
//     kelas: 'XII MIPA 8',
//     umur: 20
// }

// const {nama, kelas} = mhs
// console.log(kelas)

// Assignment tanpa deklarasi objcet
//     ({nama, kelas} = {
//         nama: 'Wahidan Nashrullah',
//         kelas: 'XII MIPA 8',
//         umur: 20
//    });
   
//     console.log(kelas)



// Assigment menjadi nama baru
// const mhs = {
//     nama: 'Wahidan Nashrullah',
//     kelas: 'XII MIPA 8',
//     umur: 20
// }

// const {nama: e, kelas: u} = mhs
// console.log(u)



// Memberikan Defaul Value
// const mhs = {
//     nama: 'Wahidan Nashrullah',
//     kelas: 'XII MIPA 8',
//     umur: 20,
//     email: 'wahidann765@gmail.com '
// }

// const {nama, kelas, umur, email = 'emaildefault@gmail.com'} = mhs
// console.log(email)



// Memberikan Nilai default  + assign ke variabel baru
// const mhs = {
//     nama: 'Wahidan Nashrullah',
//     kelas: 'XII MIPA 8',
//     umur: 20,
//     email: 'wahidann765@gmail.com '
// }

// const {nama: a, kelas: b, umur: c, email: e = 'emaildefault@gmail.com'} = mhs
// console.log(email)

// Rest Parameter
// const mhs = {
//     nama: 'Wahidan Nashrullah',
//     kelas: 'XII MIPA 8',
//     umur: 20
// }

// const {nama, ...value} = mhs
// console.log(value)



// Mengambil field pada object, setelah dikirim sebagai paramater untuk function
const mhs = {
    id: 123,
    nama: 'Wahidan Nashrullah',
    kelas: 'XII MIPA 8',
    umur: 20
}

function getIdMhs ({ id }) {
    return id;
}

console.log(getIdMhs(mhs));