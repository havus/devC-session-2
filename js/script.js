var angka = document.getElementsByName('display')[0];

var addChar = function (number) {
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = number;
    } else {
        angka.value += number;
    }
};

var allDel = function () {
    angka.value = 0;
};

var hitung = function () {
    // fix no undefined result
    if (angka.value.length == 0 || angka.value == 0) {
        angka.value = 0;
    } else {
        // issue : pembulatan decimal overload; (.toFixed) -- FIX --
        var bulat = eval(angka.value).toFixed(2);
        console.log(bulat);
        for (i = 0; i < bulat.length; i++) {
            if (bulat[i] == '.') {
                if (bulat[i + 2] == 0) {
                    if (bulat[i + 1] == 0) {
                        angka.value = bulat.slice(0, -3)
                    } else {
                        angka.value = bulat.slice(0, -1)
                    }
                }
            }
        }
    }
};

var delChar = function () {
    var result = angka.value.slice(0, -1);
    angka.value = result;
};