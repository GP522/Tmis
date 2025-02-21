import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule,MatInputModule,MatFormFieldModule,   ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  form!: FormGroup
  constructor(private _fb: FormBuilder){
    this.form = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      captcha: ['', Validators.required]
    })
    // this.generateCaptcha();
  }
  captchaUrl: string = 'dGoOz';

  generateCaptcha(): void {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.captchaUrl = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  submitForm(){
    if(this.form.valid){
      if(this.captchaUrl === this.form.get('captcha')?.value){
        console.log(this.form.value)
      }else{
        alert('please enter valid captcha.')
      }
      
    }else{
      alert('Please fill all required fields!');
      this.form.markAllAsTouched();
    }
  }
}
