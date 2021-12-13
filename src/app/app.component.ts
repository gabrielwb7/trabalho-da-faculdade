import { Component } from '@angular/core';
import { alunos } from './alunos';

//importo o arquivo aluno e atribuo na variavel listaDeAlunos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerenciador-de-alunos';
  listaDeAlunos = alunos;
}

