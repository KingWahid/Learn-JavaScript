// Membuat obejct
// 1. Obejct literal --> problemnya tidak efectif untuk object yang banyak karena meniyampan di dua memory
var mhs = {
    nama : 'Wahidan',
    jurusan : 'IPA',
    email : 'wahidann765@gmail.com',
    energi : '10',

    
}

// 2.Menggunakan function declaration --> sama menyimpan jadi 2 memory namun bisa di akali tapi ribet harus menghapus dan menambahkan object dan method
// 3. Menggunakan Object.create();
const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log('halo ' + mhs.nama + 'makan')
    },

    tidur : function(jam){
        this.energi += jam * 2
        console.log('halo ' + mhs.nama + 'selamat tidur')
    }
}


function buatObjectMahasiswa(nama, jurusan, email, energi) {
    let mhs = Object.create(methodMahasiswa);
    mhs.nama = nama;
    mhs.jurusan = jurusan;
    mhs.email = email;
    mhs.energi = energi;

    return mhs
} 

var mhs3 = buatObjectMahasiswa('idan', 'ipa', 'wahidann765@gmail.com', 10)
var mhs4 = buatObjectMahasiswa('aca', 'kedokteran', 'aca@gmail.com', 20)

//4. Constructor
function Mahasiswa(nama, jurusan, email) {
    // var this = {};
    this.nama = nama;
    this.jurusan = jurusan;
    this.email = email;
    // return this
}
var mhs5 = new Mahasiswa('inay', 'agroteknologi', 'inay@gmail.com');