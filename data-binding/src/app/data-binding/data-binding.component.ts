import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://gohiper.com.br"
  cursoAngular: boolean = true;
  urlImagem = "http://lorempixel.com/400/200/nature";

  valorSalvo = "";

  getValor() {
    return 1
  }
  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert();
  }

  onKeyUp(ev: KeyboardEvent) {
    this.url = (<HTMLInputElement>ev.target).value;
  }


  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
