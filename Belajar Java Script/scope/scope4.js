// dalam kasus ini variabel global tidak di anggap karena function terdapat argumen dan parameter dimana kedua unsur tersebut merupakan variabel khusus yang membentuk variabel local
var a = 1

function tes(a) {
    console.log(a)
}

tes(4)