import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  teste: string = "Kau";
  idButton: string = "DHUASUHDSAUHDHUSAHU";
  deveMostrarTitulo: boolean = true;

  submit(event: any) {
    console.log(event)
  }
}
