import { Component } from '@angular/core';
import { alunos } from './alunos';
import { jsPDF } from 'jspdf'; 
import { ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

//importo o arquivo aluno e atribuo na variavel listaDeAlunos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content', { static: false}) el!: ElementRef;

  title = 'gerenciador-de-alunos';
  listaDeAlunos = alunos;

  constructor() {}
  
  public gerarPDF(): void {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('relatorio.pdf');
    });
  }
}