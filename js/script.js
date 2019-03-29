var master = [];

var result = parseInt(document.getElementsByName('display')[0].value);

var allClear = function (bilangan) {
    bilangan.value = 0;
}

var addNumber = function (number) {
    var angka = document.getElementsByName('display')[0];
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = number;
        console.log('kosong')
    } else {
        angka.value += number;
        console.log('tdk kosong');
    }
}

// var plusNumber = function (input) {
//     if (parseInt(input.value.length) === 0 || parseInt(input.value) === 0) {
//         // console.log('kosong');
//         // result = 0;
//         console.log('kosong');
//     } else {
//         var bawah = document.getElementsByName('result')[0];
//         bawah.value = bawah.value + parseInt(input.value) + '+';
//         // input.value = parseInt(input) + '+';
//         console.log('tidak kosong');
//         // return input;
//     }
// }

// var hasil = "1 + 1";

// console.log(eval(hasil);
// console.log(display);

// console.log(document.getElementsByName('result')[0].value)