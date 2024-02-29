//Definición de varialbles

let descripcion
let categoria
let infoCategoria
let cantidad
let precio
let seguir
let calculador
let totalInventario

//Identificación

nombre = prompt("Introduzca su nombre:");

function saludar(nombre) {
    alert("Hola " + nombre + " puedes ingresar al menú.");
}
saludar(nombre);


//Menú principal

let ingresoProducto = parseInt(prompt("Ingreso de Prductos \n1.- Alta. \nOtro.- Salir"));

//Comienzo de ciclo

if (ingresoProducto == 1) {
    do {
        descripcion = prompt("Ingrese descripción");
        do{
            categoria = parseInt(prompt("Ingrese Categoría:\n1 - Hardware.\n2 - Software. \n3 - Eléctrico"));
            if (categoria == 1) {            
                    infoCategoria = "Hardware";
            } else  if (categoria == 2) {
                    infoCategoria = "Software";
            } else if (categoria == 3) { 
                    infoCategoria = "Eléctrico";
            } else {
                alert("Opción incorrecta, debe estar entre 1 y 3");
            }
        } while (categoria < 1 || categoria > 3);
                
        cantidad = prompt("Ingrese Cantidad Inicial");  
        precio = prompt("Ingrese Precio por unidad");
        alert("Ud. Ingreso el siguiente producto:\n" + "Descripción: " + descripcion + " " + "Cantidad: "+ cantidad + " " + "Categoria: " + infoCategoria + " " + "Precio: " + precio)   
        
        calculador = parseInt(prompt("Que desea calcular: \n1 - Valor total del inventario. \n2 - Ganancia."));
        totalInventario = cantidad * precio
        switch (calculador) {            
            case 1:
            alert("valor total del invntario: \n" + totalInventario);
            break
            case 2:
            alert("Ganancia del inventario: \n" + totalInventario * .40);
            break
        }
        seguir = prompt("Continua con la carga? S - Continuar.\n Otro - Salir.");
        
    } while (seguir == "S" || seguir == "s");
} else {
    alert("Fin de Ingresos");
}

