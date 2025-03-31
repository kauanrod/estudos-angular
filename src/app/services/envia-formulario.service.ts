import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacaoParaBackend(info: string) {
    console.log(`enviando para o backend ${info}`)
    // console.log("enviando para o backend " + info)
  }
}
