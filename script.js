// Heron's Formula
const heronsFormula = (a, b, c) => {
    return (1/4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
}

document.getElementById('calculate-heron').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('side-a-heron').value);
    var b = parseFloat(document.getElementById('side-b-heron').value);
    var c = parseFloat(document.getElementById('side-c-heron').value);
    document.getElementById('heron-result').value = heronsFormula(a, b, c);
});

// Ambiguous Case
const ambiguousCase = (a, b, A) => {
    if (A == 90) {
        return 'Right triangle';
    }
    var h = b * Math.sin(A * (Math.PI / 180));
    if (A < 90) {
        console.log('a: ' + a + ' h: ' + h)
        if (a < h) {
            return 'No triangle';
        } else if (a > h) {
            return 'One triangle';
        } else if ((h < a) && (a < b)) {
            return 'Two triangles (ambiguous case)';
        } else {
            return 'No solution';
        }
    }
    else  {
        if ((a < b)) {
            return 'No triangle';
        } else if (a > b) {
            console.log('One triangle obtuse')
            return 'One triangle';
        } else {
            return 'No solution';
        }
    }
}


document.getElementById('calculate-ambiguous').addEventListener('click', function() {
    var a = parseFloat(document.getElementById('side-a-ambiguous').value);
    var b = parseFloat(document.getElementById('side-b-ambiguous').value);
    var A = parseFloat(document.getElementById('angle-a-ambiguous').value);
    document.getElementById('triangle-type-result').value = ambiguousCase(a, b, A);
});


// Newton's Method 
const newtonsMethod = (g) => {
    function f(x) {
        return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }
    function fPrime(x) {
        return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }

    let maxIterations = 1000;
    let iterations = 0;

    while (Math.abs(f(g)) > 0.0001 && iterations < maxIterations) {
        g = g - f(g) / fPrime(g); // Newton's method update
        iterations++;
    }

    return g;
}

document.getElementById('calculate-newton').addEventListener('click', function() {
    var g = parseFloat(document.getElementById('root-guess').value);
    document.getElementById('root-approximation-result').value = newtonsMethod(g);
});


document.getElementById('calculate-newton').addEventListener('click', function() {
    var g = parseFloat(document.getElementById('root-guess').value);
    document.getElementById('root-approximation-result').value = newtonsMethod(g);
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

document.getElementById('calculate-polynomial').addEventListener('click', function() {
    var coefficients = document.getElementById('coefficients').value.split(' ');
    var exponents = document.getElementById('exponents').value.split(' ');
    var xvalue = parseFloat(document.getElementById('x-value').value);

    document.getElementById('polynomial-function-result').value = polynomialFunction(coefficients, exponents);
    document.getElementById('polynomial-evaluation-result').value = polynomialEvaluation(coefficients, exponents, xvalue);
});
