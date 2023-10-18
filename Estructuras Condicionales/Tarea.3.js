//Una persona enferma, que pesa 70kg, se encuentra en reposo y desea saber cuántas 
//calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. 
//Las actividades que tiene permitido realizar son únicamente dormir y estar sentado en reposo. 
//Los datos que tiene son que estando dormido consume 1.08 calorías por minuto
// y estando sentado en reposo consume 1.66 calorías por minuto.


const dormir = 1.08;
const sentado = 1.66;

const Dormido = parseFloat(prompt("¿Cuánto tiempo durmió (en minutos)?"));
const Sentado = parseFloat(prompt("¿Cuánto tiempo estuvo sentado en reposo (en minutos)?"));

const CalculoDormido = dormir * Dormido * 70;
const CalculoSentado = sentado * Sentado * 70;

console.log(`Calorías consumidas durmiendo: ${CalculoDormido}`);
console.log(`Calorías consumidas estando sentado: ${CalculoSentado}`);


