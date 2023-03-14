import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    // Todo: Add validations to this fields
    this.form = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
