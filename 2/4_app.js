"use strict";

/**
 * Функция арифметических операций:
 * add - сложение
 * subtract - вычитание
 * divide - деление
 * multiply - умножение
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(arg1, arg2);
        case 'subtract':
            return subtract(arg1, arg2);
        case 'divide':
            return divide(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
    }
}

/**
 * Функция вычисляет сумму двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    if (isANumber(a) && isANumber(b))
        return a + b;
}

/**
 * Функция вычисляет разность двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    if (isANumber(a) && isANumber(b))
        return a - b;
}

/**
 * Функция вычисляет деление двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
    if (isANumber(a) && isANumber(b))
        return a / b;
}

/**
 * Функция вычисляет произведение  двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    if (isANumber(a) && isANumber(b))
        return a * b;
}

/**
 * Функция проверяет, является ли переменная числом
 * @param {number} num
 * @throws {Error} если передано не число, то будет выброшена ошибка.
 * @returns {boolean}
 */
function isANumber(num) {
    if (num === '')
        throw new Error('Вы ничего не ввели');
    if (num == null)
        throw new Error('Вы нажали отмена');
    num = Number(num);
    if (isNaN(num))
        throw new Error('Вы ввели не корректное значение');
    
    return true;
}