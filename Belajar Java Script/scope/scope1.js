// function melihat keluar dan menumakan variabel global maka variabel global di timpa oleh a = 2 yang berada di dalam function
var a = 1;

function tes() {
    a = 2;
} 

tes()
console.log(a)
