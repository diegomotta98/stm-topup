import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent {

  disableButton: boolean = false;

  goToAPIpay(){
    alert('You are redirecting outside this web. For your security please confirm that you accept this action');
  }

}
