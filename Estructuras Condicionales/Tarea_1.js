//Hacer un algoritmo que calcule el total a pagar por la compra de camisas. 
//Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra, 
//si son menos de tres camisas un descuento del 10%

const Cantidad_Camisa = Number(prompt("Ingrese la cantidad de camisas: "))
const Precio_Camisa = Number(prompt("Ingrese el Precio de las Camisas: "))

if (Cantidad_Camisa < 1) {
  console.log("Ingrese un Numero Valido")
} else if (Cantidad_Camisa >= 3) {
  console.log("El Descuento es del 20%")
  let Descuento = (Cantidad_Camisa * Precio_Camisa) * 0.2
  let Total_Pagar = (Precio_Camisa * Cantidad_Camisa) - Descuento
  console.log("El total a pagar es: " + Total_Pagar)
  console.log("El Descuento fue: " + Descuento)
} else if (Cantidad_Camisa < 3) {
  console.log("Estas en el Descuento del 10%")
  let Descuento = (Cantidad_Camisa * Precio_Camisa ) * 0.1
  let Total_Pagar = (Precio_Camisa * Cantidad_Camisa) - Descuento
  console.log("El total a pagar es: " + Total_Pagar)
  console.log("El Descuento fue de: " + Descuento)
}