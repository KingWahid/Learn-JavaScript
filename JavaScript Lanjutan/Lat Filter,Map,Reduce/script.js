// ambil semua elemtn video
const semVid = Array.from(document.querySelectorAll('[data-duration]'));


// pilih hanya yang javascript lanjutan
let jsLanjutan = semVid.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil masin masing durasi video
.map(item => item.dataset.duration)
// ubah durasi menjadi int, ubah menit menjadi detik
.map (waktu => {
    // 10:30 -> 10, 30
    const parts = waktu.split(':').map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1]
})
// jumlahkan semua detik 
.reduce((total, detik) => total + detik, 0);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = Math.floor(jsLanjutan - menit * 60)

// simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.innerHTML = `${jam} Jam ${menit} Menit ${detik} Detik.`;
const jmlhVid = semVid.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlhVid = document.querySelector('.jumlah-video');
pJmlhVid.innerHTML = `${jmlhVid} Video`
console.log(jsLanjutan)