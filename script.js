// Heron's Formula
const heronsFormula = (a, b, c) => {
    return (1/4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
}

document.getElementById('heron-calculation').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('heron-a').value);
    var b = parseFloat(document.getElementById('heron-b').value);
    var c = parseFloat(document.getElementById('heron-c').value);
    document.getElementById('heron-answer').value = heronsFormula(a, b, c);
});

// Ambiguous Case
const ambiguousCase = (a, b, A) => {
    if (A == 90) {
        return 'Right Triangle';
    }
    var h = b * Math.sin(A * (Math.PI / 180));
    if (A < 90) {
        console.log('a: ' + a + ' h: ' + h)
        if (a < h) {
            return 'No Triangle';
        } else if (a > h) {
            return 'One Triangle';
        } else if ((h < a) && (a < b)) {
            return 'Two Triangles (Ambiguous Case)';
        } else {
            return 'No Solution';
        }
    }
    else  {
        if ((a < b)) {
            return 'No Triangle';
        } else if (a > b) {
            return 'One Triangle';
        } else {
            return 'No Solution';
        }
    }
}


document.getElementById('ambiguous-calculation').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('ambiguous-side-a').value);
    var b = parseFloat(document.getElementById('ambiguous-side-b').value);
    var A = parseFloat(document.getElementById('ambiguous-angle-a').value);
    document.getElementById('triangle-type').value = ambiguousCase(a, b, A);
});


// Newton's Method 
const newtonsMethod = (a) => {
    function f(x) {
        return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }
    function fPrime(x) {
        return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }
    let maxIterations = 1000;
    let iterations = 0;
    while (Math.abs(f(a)) > 0.0001 && iterations < maxIterations) {
        a = a - f(a) / fPrime(a); 
        iterations++;
    }
    return a;
}

document.getElementById('newton-calculation').addEventListener('click', function() {
    var g = parseFloat(document.getElementById('root-guess').value);
    document.getElementById('root-approximation').value = newtonsMethod(g);
});


document.getElementById('newton-calculation').addEventListener('click', function() {
    var g = parseFloat(document.getElementById('root-guess').value);
    document.getElementById('root-approximation').value = newtonsMethod(g);
});


// Polynomial Function 
const polynomialEvaluation = (coefficients, exponents, xvalue) => {
    var result = 0;
    for (var i = 0; i < coefficients.length; i++) {
        result += parseFloat(coefficients[i]) * Math.pow(xvalue, parseFloat(exponents[i]));
    }
    return result;
}

const polynomialFunction = (coefficients, exponents) => {
    var result = '';
    for (var i = 0; i < coefficients.length; i++) {
        if (i == 0) {
            result += coefficients[i] + 'x^' + exponents[i];
        } else if (coefficients[i] < 0) {
            result += ' - ' + Math.abs(coefficients[i]) + 'x^' + exponents[i];
        } else {
            result += ' + ' + coefficients[i] + 'x^' + exponents[i];
        }
    }
    return result;
}

document.getElementById('polynomial-calculation').addEventListener('click', function() {
    var coefficients = document.getElementById('coefficients').value.split(' ');
    var exponents = document.getElementById('exponents').value.split(' ');
    var xvalue = parseFloat(document.getElementById('x-value').value);

    document.getElementById('polynomial-function').value = polynomialFunction(coefficients, exponents);
    document.getElementById('polynomial-answer').value = polynomialEvaluation(coefficients, exponents, xvalue);
});
