// ini jadi variabel global soalnya function nyari ke luar dan tidak menukan variabel global maka variabel global otamatis dibuat

function tes() {
    a = 2;
} 

tes()
console.log(a)