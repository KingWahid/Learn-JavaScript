var jmlAngkot = 10
var angkotBeropersi = 6


for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if(noAngkot <= angkotBeropersi) {
    console.log('Angkot no. ' + noAngkot + ' sedang beroperasi dengan baik')
    } else if (noAngkot === 8) {
    console.log('Angkot no. ' + noAngkot + ' sedang lembur')
    } else {
        console.log('Angkot no. ' + noAngkot + ' tidak beroperasi')
    }

}
