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
    cardTypes: string[] = ['STM', 'STM Estudiante cat. A', 'STM Estudiante cat. B']
  
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

  openFillCardInput() {
    if(this.formGroup.get('cardType')?.value == CardTypes.STM) {
      this.common = true;
    }else if(this.formGroup.get('cardType')?.value == CardTypes.STMEstudianteCatA) {
      this.studentA = true;
    }else{
      this.studentB = true;
    }
  }
}

enum CardTypes {
  STM = 'STM',
  STMEstudianteCatA = 'STM Estudiante cat. A',
  STMEstudianteCatB = 'STM Estudiante cat. B'
}
