var noAngkot = 1
var angkotBeropersi = 9
var jmlAngkot = 10
while(noAngkot <= angkotBeropersi) {
    console.log('Angkot no. ' + noAngkot + " beroperasi dengan baik")
    noAngkot++;
}

for( var noAngkot = angkotBeropersi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    console.log('Angkot no. ' + noAngkot + " sedang tidak beroperasi")
}