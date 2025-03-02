// Declaramos una Array con elementos Array para guardar la lista de elementos
let listaDeCompras = {
    Frutas: [],
    Lacteos: [],
    Congelados: [],
    Dulces: [],
    Otros: []
};

// console.log, ayuda  ver que se esta moviendo la información internamente
// alert, muestro el resultado en una ventana

function agregarAlimento() {
    let agregar = prompt("¿Deseas agregar un alimento a tu lista de compras? (SI/NO)");
    
    console.log(agregar);

    while (agregar.toLowerCase() === "si") {
        let alimento = prompt("¿Qué alimento deseas agregar?");
        let categoria = prompt("¿En qué categoría encaja este alimento? (Frutas, Lacteos, Congelados, Dulces, Otros)");
        
        console.log(alimento);
        console.log(categoria);

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(alimento);
            
            console.log(listaDeCompras);
            console.log(listaDeCompras[categoria]);

        } else {
            alert("Categoría no válida. Elige una de las siguientes: Frutas, Lacteos, Congelados, Dulces, Otros.");
        }
        
        agregar = prompt("¿Deseas agregar otro alimento a tu lista de compras? (SI/NO)");
    }
    
    mostrarListaDeCompras();
}

function mostrarListaDeCompras() {
    let mensaje = "Lista de compras: \n";

    console.log("Lista de compras:");    
    
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            console.log(`  ${categoria}: ${listaDeCompras[categoria].join(", ")}`);
            mensaje += `${categoria}: - ${listaDeCompras[categoria].join(", ")}\n`;
        } else {
            console.log(`  ${categoria}:`);
            mensaje += `${categoria}:\n`;
        }
    }

    console.log(mensaje);
    alert(mensaje);
}

// Llamamos la función de llenado
agregarAlimento();

