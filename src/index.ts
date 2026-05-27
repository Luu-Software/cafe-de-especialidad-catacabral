import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let total:number= Number(totalTexto);
let personas: number=Number(personasTexto);
if (esEstudiante==='si')
{ total=total*0.9;}
let totalPorPersona: number = 0; // COMPLETAR
totalPorPersona=total/personas
console.log(`Total por persona: $${totalPorPersona}`);