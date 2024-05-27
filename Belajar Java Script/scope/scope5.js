// meskipun namanya sama a semua namu terdapat 2 jenis variabel. variabel global terdapat di var a = 1,tes(a), dan console.log(a) sedangkan variabel local function(a),dan console.log(a)
var a = 1

function tes(a) {
    console.log(a)
}

tes(a)
console.log(a)