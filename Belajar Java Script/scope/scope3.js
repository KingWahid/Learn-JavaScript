// tidak ditemukannya variabel global di luar function maka otomatis di buatkan variabel global untuk mengatasi kita tambahkan 'use strict' maka jadi variabel local
'use strict'

function tes() {
    a = 2;
} 

tes()
console.log(a)