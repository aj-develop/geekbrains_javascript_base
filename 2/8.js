/*
* С помощью рекурсии организовать функцию возведения числа в степень.
* Формат: function power(val, pow), где val — заданное число, pow –— степень.
 */
"use strict";

function power(val, pow) {
    if (pow > 1)
        val *= power(val, pow - 1);

    return val;
}

console.log(power(2, 12));