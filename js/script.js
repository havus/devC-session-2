var angka = document.getElementsByName('display')[0];

var addChar = function (number) {
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = number;
    } else {
        angka.value += number;
    }
};

var addDoubleNull = function (number) {
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = 0;
    } else {
        angka.value += number;
    }
};

var allClear = function (bilangan) {
    bilangan.value = 0;
};

var hitung = function () {
    // fix no undefined result
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = 0;
    } else {
        // issue : pembulatan decimal overload; (.toFixed) -- FIX --
        angka.value = eval(angka.value).toFixed(2);
    }
};

var delChar = function () {
    var result = angka.value.slice(0, -1);
    angka.value = result;
};