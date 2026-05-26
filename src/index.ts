import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let total:number= Number(totalTexto);
let estudiantes:number=Number(esEstudiante)
let personas: number=Number(personasTexto)
let totalPorPersona: number = 0; // COMPLETAR
console.log(`Total por persona: $${totalPorPersona}`);
