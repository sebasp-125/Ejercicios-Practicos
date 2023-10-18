//Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:

//Si trabaja 40 horas o menos se le paga $16 por hora
//Si trabaja más de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra.

const Horas_Trabajadas = prompt("Ingrese las Horas que Trabajo")

if (Horas_Trabajadas <= 40) {
  console.log("16.000 La Hora")
  console.log("Su Salario Semanal fue: " + Horas_Trabajadas * 16000)
} else if (Horas_Trabajadas === 40) {
  console.log("16.000 La Hora")
  console.log("Su Salario fue: "  + Horas_Trabajadas * 16000)
} else if (Horas_Trabajadas > 40) {
  console.log("Horas Extra 20.000")
  console.log("Su Salario Semanal fue: " + Horas_Trabajadas * 20000)

}