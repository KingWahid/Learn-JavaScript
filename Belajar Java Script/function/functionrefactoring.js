// function jumlahDuaBilangan(a, b) {
//     var total, volumeA, volumeB;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     total = volumeA + volumeB

//     return total;
// }

// alert(jumlahDuaBilangan(1,2))

// Refactoring
function jumlahDuaBilangan(a, b) {
    return a * a * a + b * b * b
}
alert(jumlahDuaBilangan(8,3))