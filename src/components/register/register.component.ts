import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    schoolName: new FormControl('', [
      Validators.required,
      Validators.max(100),
      Validators.pattern(/^[a-zA-Z.,-_']+/gi)
    ]),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    province: new FormControl(''),
    postalCode: new FormControl(''),
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    role: new FormControl(''),
    defaultPassword: new FormControl(''),
  });

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {

  }

  get name() { return this.registerForm.get('schoolName'); }


  onSubmit(){
    console.log("submitted");
  }
}
