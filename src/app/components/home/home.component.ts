import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  teste: string = "Kau"
  name: string = "Kauan"
  idButton: string = "DHUASUHDSAUHDHUSAHU"
  deveMostrarTitulo: boolean = true
  items: string[] = ["Um", "Dois", "Tres"]
  private enviaFormularioService = inject(EnviaFormularioService)
  @Input("name") teste2!: string
  @Output() emitindoValorNome = new EventEmitter<string>()

  ngOnInit() {
    console.log("Valor recebido no TypeScript:", this.teste2);
  }

  submit() {
    this.emitindoValorNome.emit(this.name)
    this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao")
  }
}
