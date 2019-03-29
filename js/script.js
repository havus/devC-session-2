var angka = document.getElementsByName('display')[0];

var addChar = function (number) {
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = number;
    } else {
        angka.value += number;
    }
}

var addDoubleNull = function (number) {
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = 0;
    } else {
        angka.value += number;
    }
}

var allClear = function (bilangan) {
    bilangan.value = 0;
}

var hitung = function () {
    angka.value = eval(angka.value);
}

var delChar = function () {
    var result = angka.value.slice(0, -1);
    angka.value = result;
}

// var namaFungsi = (data1, data2) =>
//     console.log(data1 + data2);

// namaFungsi(1, 9);

// var addDoubleNull = (number) =>
//     if (angka.value.length == 0 || angka.value == 0) {
//         angka.value = 0;
//     } else {
//         angka.value += number;
//     };