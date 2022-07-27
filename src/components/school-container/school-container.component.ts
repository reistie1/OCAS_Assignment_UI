import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-school-container',
  templateUrl: './school-container.component.html',
  styleUrls: ['./school-container.component.sass']
})



export class SchoolContainerComponent implements OnInit {
  public updated: boolean = false;
  public updateMessage: string = "Form was updated";



  constructor() { }

  ngOnInit(): void {
  }

  showNotification(){
    this.updated = !this.updated;
  }

  doSomething(event: any)
  {
    setTimeout(() => this.showNotification(), 100)
    setTimeout(() => this.showNotification(), 1200)
    console.log(this.updated);
  }

}
