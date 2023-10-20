function parcitos (num) {
    num = Number(prompt("Elija un numero para comprobar"))
    if (num % 2 == 0) {
        console.log("La cosa esta funciona y tu número es par")
        return true
    } 
    else {
        console.log("La cosa esta funciona y tu número es impar")
        return false
    }
}
function comparameNumeros (x, y) {
    x = Number(prompt("elegite un numero "))
    y = Number(prompt("elegite otro numero "))
    if (x > y) {
        console.log(x + " es mayor que " + y)
        return x + " es mayor que " + y
    }
    else if (x < y ){
        console.log(y + " es mayor que " + x)
        return y + " es mayor que " + x
    } 
    else if (x == y) {
        console.log("son lo mismo")
        return " son lo mismo"
    }
}
function positivoNegativoCero (num) {
    num = Number(prompt("elegite un numero master"))
    if (num >= 1) {
        console.log("tu número es positivo")
        return "tu número es positivo"
    }
    else if (num <= -1) {
        console.log("tu número es negativo")
        return "tu número es negativo"
    }
    else if (num == 0) {
        console.log("tu numero es 0")
        return "tu numero es 0"
    }
}
function comprobameNumeros (x) {
    x = Number(prompt("Elija un numero"))
    if ((x >= 25) && (x <= 255)) {
        console.log("Tu número " + x + " está entre 25 y 255")
        return "Tu número " + x + " está entre 25 y 255"
    } 
    else {
        console.log("Tu número " + x + " no está entre 25 y 255")
        return("Tu número " + x + " no está entre 25 y 255")
    }
}
