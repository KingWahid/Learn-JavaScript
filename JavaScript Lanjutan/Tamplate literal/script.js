// tempalte literal
// template literal dalah string literal yang menmungkinkan adanya expresion didalamnya

// > menggunakan backtick
`string text`
// > multi line String
`string text 1
string text 2
string text 3`
// > embeded xpression
`string text ${expresion} string text`
// > html fragment
// > expressiion interpolasi
// let a = 10;
// let b =  15;
// console.log(`jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);
// > tag template
tag `string text ${expresion} string text`


// > multi line HTML fragments
// ada object
// const mahasiswa = {
//     nama: 'wahidan nashrullah',
//     umur: 33,
//     nrp: 401203,
//     email: 'wahidann765@gmail.com'
//  };

// menggunakan concet (ribet)
// let el = '';
// el += '<div class="mahasiswa">';
// el += '<h2>' + mahasiswa.nama + '</h2>';
// el += '<span class="nrp">' + mahasiswa.nrp + '</span>'
// el += '</div>'

// menggunakan tempalte literal // menggunakan multi line HTML Fragments
// let el = `<div class=""mahasiswa>
// <h2>${mahasiswa.nama}</h2>
// <span class="nrp">${mahasiswa.nrp}</span>
// </div>`;
// console.log(el)

// Embeded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert(halo!)}`);
// const x = 10
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mahasiswa = {
    nama: 'wahidan nashrullah',
    umur: 33,
    nrp: 401203,
    email: 'wahidann765@gmail.com'
 };
    
// const el = `<div class=""mahasiswa>
 // <h2>${mahasiswa.nama}</h2>
 // <span class="nrp">${mahasiswa.nrp}</span>
 // </div>`;
 // console.log(el)
 