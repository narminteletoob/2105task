class objectclass {
    constructor(multiply, divide, add, subtract) {
        var x = add(50, 6)
        dcument.getElementById("demo").innerHTML = x;

        function add(a, b) {
            return (a + b)
        };
        var x = subtract(56, 30)
        dcument.getElementById("demo").innerHTML = x;

        function subtract(a, b) {
            return (a - b)
        };
        var x = multiply(26, 3)
        dcument.getElementById("demo").innerHTML = x;

        function multiply(a, b) {
            return (a * b)
        };
        var x = divide(78, 2)
        dcument.getElementById("demo").innerHTML = x;

        function divide(a, b) {
            return (a / b)
        };
    }
}