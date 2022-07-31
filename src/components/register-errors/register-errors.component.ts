import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-errors',
  templateUrl: './register-errors.component.html',
  styleUrls: ['./register-errors.component.sass']
})
export class RegisterErrorsComponent implements OnInit {
  @Input("errors") errors: string[];

  constructor() { }

  ngOnInit(): void {
  }
}
