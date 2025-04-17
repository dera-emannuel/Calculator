let display_result = document.getElementById('input');

function no7() {
    display_result.value += '7';
}

function no8() {
    display_result.value += '8';
}

function no9() {
    display_result.value += '9';
}

function no4() {
    display_result.value += '4';
}

function no5() {
    display_result.value += '5';
}

function no6() {
    display_result.value += '6';
}

function no1() {
    display_result.value += '1';
}

function no2() {
    display_result.value += '2';
}

function no3() {
    display_result.value += '3';
}

function zero() {
    display_result.value += '0';
}

function plus() {
    display_result.value += '+';
}

function minus() {
    display_result.value += '-';
}

function multiply() {
    display_result.value += '*';
}

function divide() {
    display_result.value += '/';
}

function pencent() {
    let value = parseFloat(display_result.value);
    if (isNaN(value)) {
        display_result.value = "Error";
    } else {
        display_result.value = (value / 100).toString();
    }
}

function point() {
    let current = display_result.value;
    if (!current.includes('.')) {
        display_result.value += '.';
    }
}

function clearing() {
    display_result.value = '';
}

function delect() {
    display_result.value = display_result.value.slice(0, -1);
}

function result() {
    try {
        display_result.value = eval(display_result.value);
    } catch (e) {
        display_result.value = 'Error';
    }
}
