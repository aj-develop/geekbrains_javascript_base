/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где
arg1, arg2 — значения аргументов,
operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch).
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
    }
}