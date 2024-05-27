var item = prompt ('masukan nama makanan/minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch(item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('minuman sehat')
        break;
    case 'hambuger' :
    case 'softdrink' :
        alert('minuman tidak sehat')
        break;
    default :
    alert('makanan/minuman yang anda pilih salah')
}