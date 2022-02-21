import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Refeicao } from 'src/app/interfaces/refeicao';
import { nomeRefeicao } from 'src/app/interfaces/nomeRef';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-tela-principal',
  styleUrls: ['tela-principal.component.css'],
  templateUrl: 'tela-principal.component.html',
})
export class TelaPrincipalComponent {
  constructor() {}

  ngOnInit() {}

  ELEMENT_DATA: nomeRefeicao[] = [
    { id:1, name: "Cafe da manhã", nameRef: { name:'feijao' , calorias: 100, quantidade: '100 gr', carboidratos: 30} as Refeicao},
    { id:2, name: "Almoço", nameRef: { name:'feijao' , calorias: 100, quantidade: '100 gr', carboidratos: 30} as Refeicao},
    { id:3, name: "Jantar", nameRef: { name:'feijao' , calorias: 100, quantidade: '100 gr', carboidratos: 30} as Refeicao},
    { id:3, name: "Ceia", nameRef: { name:'feijao' , calorias: 100, quantidade: '100 gr', carboidratos: 30} as Refeicao}
  ];

  displayedColumns: string[] = ['name', 'calorias', 'quantidade', 'carboidratos'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

}
