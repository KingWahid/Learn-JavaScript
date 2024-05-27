var penumpang = []
var tambahPenumpang = function(namaPenumpang, penumpang) {


        // jika angkot kosong
        if ( penumpang.length == 0) {
            // tambah penumpang di awal array
            penumpang.push(namaPenumpang)
            // kembalikan isi array dan keluar dari function
            return penumpang;
        } else {
            // telurusi seluruh kursi dari awal
            for(var i = 0; i < penumpang.length; i++) {
                // jika ada kursi kosong
                if(penumpang[i] == undefined) {
                    // tambah penumpang dikursi tersebut
                    penumpang[i] = namaPenumpang
                    // kembalikan isi array  dan keluar function
                    return penumpang
                }
                // jika sudah ada nama yang sama 
                else if (penumpang[i] == namaPenumpang) {
                    // tampilkan pesan kesalahannya
                    console.log(namaPenumpang + ' sudah ada di dalam angkot')
                    // kembalikan isi array
                    return penumpang
                }
                // jika selluruh kursi terisi
                else if (i == penumpang.length - 1) {
                    // tambah penumpang di akhir array
                    penumpang.push(namaPenumpang)
                    // kembalikan isi array dan keluar dari function
                    return penumpang
                }
             }

        }
    }

    var hapusPenumpang = function(namaPenumpang, penumpang) {
        // jika angkot msih kosng
        if(penumpang.length == 0) {
            // tampi;kan pesan bahwa ankot ksong
            console.log ('Angkot masih kosong')
            // kembalikan isi array dan keluar dari fucntion
            return penumpang
        } else {
            // telusuri seluruh kursi dari awal
            for(var i = 0; i < penumpang.length; i++) {
                // jika nama penumpang sesuai 
                if( penumpang[i] == namaPenumpang ) {
                    // hapus nama penumpang menjadi undefined
                    penumpang[i] = undefined
                    // kembalikan isi array
                    return penumpang

                // jika tidak ada nama yang sesuai 
                } else if (i == penumpang.length - 1) {
                    // tampilkan pesan kesalahannya
                    console.log(namaPenumpang + ' tidak ada di dalam angkot')
                    // kembalikan isi array
                    return penumpang
                }
            }
        }
    }

    