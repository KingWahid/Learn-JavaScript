var tanya = true
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');
    // membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah'
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang'
    } else {
        comp = 'semut'
    }
        
    var hasil = ''

    // menentukan rules
    if (comp == p) {
        hasil = 'SERI'
    } else if (p == 'gajah') {
        if (comp == 'orang') {
            hasil = 'MENANG'    
        } else {
        hasil = 'KALAH'
        }
    } else if (p == 'orang') {
        if (comp == 'gajah') {
            hasil = 'kalah'
        } else {
        hasil = 'menang'
        }
    } else if (p == 'semut') {
        if (comp == 'gajah') {
            hasil = 'menang'
        }
    } else {
        hasil = 'kalah'
    }
        
        

    //hasilnya
    alert('kamu memilih: ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : kamu ' + hasil)

    tanya = confirm('lagi?')
}

alert('terimakasih sudah bermain dengan kami')