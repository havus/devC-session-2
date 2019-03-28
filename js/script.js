function allClear(bilangan) {

}

function addNumber(input, number) {
    if (input.value == null || input.value == 0) {
        input.value = number;
    } else {
        input.value += number;
    }
}