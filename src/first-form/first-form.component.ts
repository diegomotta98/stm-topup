import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})

export class FirstFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
    formGroup!: FormGroup;
    common: boolean = false;
    studentA: boolean = false;
    studentB: boolean = false;
    cardTypes: string[] = ['STM', 'STM Estudiante cat. A', 'STM Estudiante cat. B'];
    isCardTypeSelected: boolean = false;
    inputTitle: string = "";
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      documentNumber: new FormControl('documentNumber', [Validators.required, Validators.minLength(8)]),
      cardType: new FormControl('cardType', [Validators.required]),
      balanceToAdd: new FormControl('balanceToAdd', [Validators.required]),
      ticketsToAdd: new FormControl('ticketsToAdd', [Validators.required])
    });
  }

  onSubmit() {
    console.log("you sumbitted info");
  }

  onSelectCardType() {
    if (this.formGroup.get("cardType")?.value != null && this.formGroup.get("cardType")?.value.includes("Estudiante")) {
      this.isCardTypeSelected = true;
      this.inputTitle = "Ingrese cantidad de boletos deseados";
    }
    if (this.formGroup.get("cardType")?.value != null && this.formGroup.get("cardType")?.value == "STM") {
      this.isCardTypeSelected = true;
      this.inputTitle = "Ingrese saldo deseado";
    }
    // this.isCardTypeSelected = true;
    // console.log(this.isCardTypeSelected);
  }
}

enum CardTypes {
  STM = 'STM',
  STMEstudianteCatA = 'STM Estudiante cat. A',
  STMEstudianteCatB = 'STM Estudiante cat. B'
}
