// 1. HTml Fragment
// const mhs = {
//     nama: 'wahidan nashrullah',
//     umur: 33,
//     nrp: 401203,
//     email: 'wahidann765@gmail.com'
//  };

//  const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
//  </div>`

//  console.log(el)


// 2. Looping
// const mhs = [
//     {
//         nama: 'wahidan nashtullah',
//         nrp: '42040285'
//     },
//     {
//         nama: 'shinta simanjuntak',
//         nrp: '42040285',
//     },
//     {
//         nama: 'rizaldy saefulah',
//         nrp: '42040285'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.nrp}</li>
//     </ul>`).join('')}
// </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau adalah',
//     penyanyi: 'Dodoy lian',
//     feat: 'wahidan'
// };

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
//     </ul>
// </div>`

// 4. Nested
// HTML Bersarang

const mhs = {
    nama: 'Wahidan Nashrullah',
    semester: 5,
    mataKuliah: [
        'Reakayasa Web',
        'Pemrogaraman',
        'Percintaan',
        'UI/UX'
    ]
};

function cetakMatkul (mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>    
<h4>Mata Kuliah: </h4>
${cetakMatkul(mhs.mataKuliah)}
</div>`;
 document.body.innerHTML = el;