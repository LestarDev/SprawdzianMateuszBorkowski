import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  value1!: number;
  value2!: number;
  op: string = "";

  wynik: number = 200;

  oblicz(): void{
    if(!this.value1) return;
    if(!this.value2) if(this.value2!=0) return;
    if(!this.op) return;
    if(this.value2==0) if(this.op=="/") return;
    switch(this.op){
      case '*':
        this.wynik=this.value1*this.value2;
        break;
      case '-':
        this.wynik=this.value1-this.value2;
        break;
      case '+':
        this.wynik=this.value1+this.value2;
        break;
      case '/':
        this.wynik=this.value1/this.value2;
        break;
      default:
        this.wynik=200;
    }
  }

  pies = {
    rasa: "Kundel",
    imie: "Pawel",
    wiek: 2
  }

  ngOnInit(): void {
  }

}
