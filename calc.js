function numero(){
    return Number(document.getElementById("pantalla").value);
}

function numeros(){
    //split devuelve un array separado por lo indicado (,)
    //map aplica lo indicado (pasar a Number) a cada posicion del array
    return document.getElementById("pantalla").value.split(",").map(Number);
}

function rellenar(v){
    document.getElementById("pantalla").value = v;
}

function vaciar(){
    rellenar("");

}
function cuadrado(){
    let num = numero();
    rellenar(num*num);
    rellenar_info();
}
function rellenar_info(){
    //inicializar n como contenedor de funcion numero()
    let n = numero();
    //inicializar msg como contenedor del mensaje futuro
    let msg = "";
    //si n no es de tipo numero
    if(Number.isNaN(n)){
        msg = "No es un número.";
    }
    //en el caso de que sea un numero
    else{
        //si es menor que 100
        if(n < 100){
            msg = "Info: el resultado es menor que 100.";
        }
        //mayor que 200
        else if(n > 200){
            msg = "Info: el resultado es mayor que 200.";
        }
        //si no es menor que 100 y no es mayor de 200
        else{
            msg = "Info: el resultado está entre 100 y 200.";
        }
    }
    //editar html y que muestre la variable msg
    document.getElementById("info").innerHTML = msg;
}
//valor absoluto
function mod(){
    let num = numero();
    rellenar(Math.abs(num));
    rellenar_info();
}
//valor factorial
function fact(){
    let num = numero();
    let res = 1;
    for(let i = num; i > 1; i--){
        res = res * i;
        //res*=i;
    }
    rellenar(res);
}
//operaciones binarias
let acumulador = 0;
let operador = "";

function acumula(num){
    //segun el operador
    switch (operador){
        case "":
            acumulador = num;
            break;
        case "+":
            //el valor acumulado + el nuevo numero
            acumulador += num;
            break;
        case "-":
            acumulador -= num;
            break;     
        case "*":
            acumulador *= num;
            break;      
        case "/":
            acumulador = acumulador / num;
            break;   
        case "%":
            acumulador = acumulador * num / 100;
            break;      
    }
}

function sumar(){
    //llamar a la funcion acumula
    //y pasarle por parametro la funcion numero
    acumula(numero());
    //operando de cada operacion
    operador = "+";
    //vaciar la pantalla
    vaciar();
}

function restar(){
    acumula(numero());
    operador = "-";
    vaciar();
}

function multiplicar(){
    acumula(numero());
    operador = "*";
    vaciar();
}

function dividir(){
    acumula(numero());
    operador = "/";
    vaciar();
}

function igual(){
    acumula(numero());
    operador = "";
    rellenar(acumulador);
    rellenar_info();
}

function porcentaje(){
    acumula(numero());
    operador = "%";
    vaciar();
}
//operaciones en formato CSV
function sumatorio(){
    let array = numeros();
    let res = 0;
    //i es la long del array - 1 porque la i 
    //van a ser las posiciones (2 - 1, empiezo por la pos.1)
    //y llega hasta la 0
    /*for(let i = array.lenght - 1; i >= 0; i--){
        res += array[i];
    }*/
    for(let n of array){
        res += n;
    }
    rellenar(res);
    rellenar_info();
}
function ordenar(){
    let array = numeros();
    array.sort(function(a, b){return a-b});
    //let res = numeros().sort((a,b) => a-b)
    rellenar(array);
}
function revertir(){
    let array = numeros();
    //array vacio pq revertir da la vuelta a lo escrito
    /*let res = [];
    for(let i = array.length - 1; i >= 0; i--){
        //posicion mas grande -i = pos 0
        //array.lengh = 3. La i seria 3 - 1 = 2(posicion max)
        res[array.length -1 -i] = array[i];
    }*/
    array.reverse();
    rellenar(array);
    rellenar_info();
}
function quitar(){
    let array = numeros();
    let res = [];
    //se recorre el array desde la pos anterior a la max
    /*for(let i = array.length - 2; i >= 0; i--){
        res[i] = array[i];
    }*/
    array.pop();
    rellenar(array);
    rellenar_info();
}
