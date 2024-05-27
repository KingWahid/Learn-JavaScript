// Membuat obejct
// 1. Obejct literal --> problemnya tidak efectif untuk object yang banyak
var mhs = {
    nama : 'Wahidan',
    jurusan : 'IPA',
    email : 'wahidann765@gmail.com',
    energi : '10',

    
}

// 2.Menggunakan function declaration
function buatObjectMahasiswa(nama, jurusan, email, energi) {
    var mhs = {};
    mhs.nama = nama;
    mhs.jurusan = jurusan;
    mhs.email = email;
    mhs.energi = energi;
    
    mhs.makan = function(porsi){
        this.energi += porsi;
        console.log('halo ' + mhs.nama + 'makan')
    }

    mhs.main = function(jam){
        this.energi -= jam;
        console.log('halo ' + mhs.nama + ' selamat bermain')
    }
    return mhs
} 

var mhs3 = buatObjectMahasiswa('idan', 'ipa', 'wahidann765@gmail.com', 10)
var mhs4 = buatObjectMahasiswa('aca', 'kedokteran', 'aca@gmail.com', 20)

// Constructor
function Mahasiswa(nama, jurusan, email) {
    // var this = {};
    this.nama = nama;
    this.jurusan = jurusan;
    this.email = email;
    // return this
}
var mhs5 = new Mahasiswa('inay', 'agroteknologi', 'inay@gmail.com');