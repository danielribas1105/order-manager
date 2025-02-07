import { v4 as uuid} from "uuid"

export default class GerarIds {
   
   static gerarIdUnico(): string {
      const agora = new Date();

      // Obter partes da data e hora
      const ano = agora.getFullYear();
      const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro e 0
      const dia = String(agora.getDate()).padStart(2, '0');
      const hora = String(agora.getHours()).padStart(2, '0');
      const minuto = String(agora.getMinutes()).padStart(2, '0');
      const segundo = String(agora.getSeconds()).padStart(2, '0');
      const milissegundos = String(agora.getMilliseconds()).padStart(3, '0');

      // Concatenar as partes em uma string unica
      return `${ano}${mes}${dia}${hora}${minuto}${segundo}${milissegundos}`;
   }

   static newId(): string {
      return uuid();
   }

}