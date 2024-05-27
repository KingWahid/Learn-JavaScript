const name = "wahidan nashrullah";
let usia = 6;

let biodata = document.getElementById('biodata');

function generateBiodata() {
let generasi

if(1 < usia && usia < 3) 
{
generasi = "generasi bayi"
} 
else if(4 < usia && usia < 10) 
{
generasi = "generasi anak anak"
} 
else if (usia > 11 && usia < 19) 
{
generasi = "generasi remaja"
}
else if (usia > 20 && usia < 30)
{
generasi = "generasi muda"
}
else
{
generasi = "generasi tua"
}

return biodata.innerHTML = generasi;
}

console.log(name);
console.log(usia);
generateBiodata()