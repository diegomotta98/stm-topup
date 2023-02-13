import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent {
  cards: string[] = ['Estudiante Cat. A', 'STM', 'STM Jubilado']; //Esta lista debe armarse con las tarjetas que ingrese el usuario
  selected: string = 'none';// selected deberia tener el valor que el usuario selecciono para luego hacer la request y cargar definitivamente el saldo
  @Input() dropdownTitle: string = '';

  constructor() {}

}
